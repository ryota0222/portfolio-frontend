import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document, BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import Image from 'next/image'
import Link from 'next/link'
import ImageComponent from '@/components/atoms/Image'
import { SvgIcon } from '@/components/atoms/SvgIcon'
import BlogStyle from '@/styles/blog'

interface CodeProps {
  lang?: string
}

interface EmbeddedEntryProps {
  title: string
  description: string
  thumbnail_url: string | null
  thumbnail_alt: string
  id: string
}

interface InlineEmbeddedEntryProps {
  title: string
  id: string
}

interface ContentImageProps {
  url: string
  title: string
}

const getRichTextRenderer = (data: Document) => {
  // オプション
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <BlogStyle.Bold>{text}</BlogStyle.Bold>,
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const { title, description, thumbnail, id } = node.data.target.fields
        const thumbnail_url = thumbnail?.fields?.file?.url ?? null
        const thumbnail_alt = thumbnail?.fields?.description ?? ''
        return (
          <EmbeddedEntry
            title={title}
            description={description}
            thumbnail_alt={thumbnail_alt}
            thumbnail_url={thumbnail_url}
            id={id}
          />
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const target = node.data.target
        const { fields } = target
        const {
          file: { url },
          title,
        } = fields
        return <ContentImage url={`https:${url}`} title={title} />
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const { title, id } = node.data.target.fields
        return <InlineEmbeddedEntry title={title} id={id} />
      },
      [INLINES.HYPERLINK]: ({ data }, children) => {
        return (
          <BlogStyle.ExternalLink href={data.uri}>
            {children}
          </BlogStyle.ExternalLink>
        )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content.length === 1 &&
          node.content[0]?.marks?.find((x) => x.type === 'code')
        ) {
          return <Code>{children}</Code>
        } else if (
          node.content.length === 1 &&
          node.content[0].nodeType === 'hyperlink' &&
          node.content[0]?.content[0]?.data['ogp'] !== undefined
        ) {
          const ogp = node.content[0].content[0].data['ogp']
          return (
            <LinkEntry
              url={node.content[0].data.uri}
              ogp_title={ogp['og:title']}
              ogp_description={ogp['og:description']}
              ogp_url={ogp['og:url']}
              ogp_image={ogp['og:image']}
            />
          )
        }
        return <BlogStyle.Paragraph>{children}</BlogStyle.Paragraph>
      },
      [BLOCKS.HEADING_1]: (node, children) => (
        <BlogStyle.H1 id={children} className="content">
          {children}
        </BlogStyle.H1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <BlogStyle.H2 id={children} className="content">
          {children}
        </BlogStyle.H2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <BlogStyle.H3 id={children} className="content">
          {children}
        </BlogStyle.H3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <BlogStyle.H4 id={children} className="content">
          {children}
        </BlogStyle.H4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <BlogStyle.H5 id={children} className="content">
          {children}
        </BlogStyle.H5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <BlogStyle.H6 id={children} className="content">
          {children}
        </BlogStyle.H6>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <BlogStyle.OrderList>{children}</BlogStyle.OrderList>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <BlogStyle.UnOrderList>{children}</BlogStyle.UnOrderList>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <BlogStyle.BlockQuote>{children}</BlogStyle.BlockQuote>
      ),
    },
    renderText: (text) => text.replace('!', '?'),
  }
  return documentToReactComponents(data, options)
}

export default getRichTextRenderer

const Code: React.FC<CodeProps> = ({ children, lang }) => {
  const _lang = lang ?? 'js'
  return (
    <BlogStyle.CodeWrapper className="code prism">
      <div className="head-component">
        <div className="btn-wrapper">
          <span className="btn"></span>
          <span className="btn"></span>
          <span className="btn"></span>
        </div>
      </div>
      <pre className={`line-numbers language-${_lang}`}>
        <code className={`language-${_lang}`}>{children}</code>
      </pre>
    </BlogStyle.CodeWrapper>
  )
}

const EmbeddedEntry: React.FC<EmbeddedEntryProps> = ({
  children,
  title,
  description,
  thumbnail_url,
  thumbnail_alt,
  id,
}) => {
  const bg = useColorModeValue('#f6f6f6', '#313131')
  const titleFontSize = useBreakpointValue({ base: '0.9rem', md: '1rem' })
  return (
    <Box my={8} cursor="pointer">
      <Link href={`/blog/${id}`} passHref>
        <Flex
          borderRadius={10}
          borderColor="#dddddd"
          borderWidth="1px"
          p={4}
          backgroundColor={bg}
        >
          {thumbnail_url ? (
            <Flex
              borderRadius={9}
              overflow="hidden"
              width={'80px'}
              height={'80px'}
            >
              <Image
                src={`https:${thumbnail_url}`}
                alt={thumbnail_alt.length > 0 ? thumbnail_alt : '画像'}
                width={'80px'}
                height={'80px'}
                objectFit="cover"
              />
            </Flex>
          ) : (
            <></>
          )}
          <Box ml={4} w={`calc(100% - 80px)`}>
            <Text fontWeight="bold" fontSize={titleFontSize}>
              {title}
            </Text>
            <Text noOfLines={2} fontSize={12} mt={2}>
              {description}
            </Text>
          </Box>
        </Flex>
      </Link>
    </Box>
  )
}

const InlineEmbeddedEntry: React.FC<InlineEmbeddedEntryProps> = ({
  children,
  title,
  id,
}) => {
  const bg = useColorModeValue('#f6f6f6', '#313131')
  const color = useColorModeValue('#313131', '#f6f6f6')
  const border = useColorModeValue('#ddd', '#666')
  return (
    <Link href={`/blog/${id}`} passHref>
      <Flex
        borderRadius={8}
        borderColor={border}
        borderWidth="1px"
        backgroundColor={bg}
        display="inline-flex"
        px={2}
        alignItems="center"
        height="28px"
        cursor="pointer"
      >
        <SvgIcon name="link" color={color} width="18px" height="18px" />
        <Text fontWeight="bold" fontSize="0.6rem" ml={2}>
          {title}
        </Text>
      </Flex>
    </Link>
  )
}

const ContentImage: React.FC<ContentImageProps> = ({ url, title }) => {
  const shadow = useColorModeValue('#00000010', '#00000080')
  return (
    <Box m="40px auto" maxW="600px">
      <Box boxShadow={`0 8px 40px ${shadow}`} maxW="600px">
        <ImageComponent url={url} title={title} />
      </Box>
    </Box>
  )
}

const LinkEntry = ({ url, ogp_title, ogp_description, ogp_url, ogp_image }) => {
  const bg = useColorModeValue('#f6f6f6', '#313131')
  const hoverBg = useColorModeValue('#f2f2f2', '#444')
  const textColor = useColorModeValue('#002E48', '#FFFFFF')
  return (
    <Box my={4}>
      <Flex
        as="a"
        href={url}
        target="_blank"
        rel="noreferrer"
        borderRadius={10}
        borderColor="#dddddd"
        borderWidth="1px"
        justifyContent="space-between"
        h="120px"
        _hover={{ bgColor: hoverBg }}
        boxSizing="content-box"
        backgroundColor={bg}
      >
        <Box p={4}>
          <Text
            color={textColor}
            fontWeight="bold"
            noOfLines={2}
            fontSize="0.9rem"
          >
            {ogp_title}
          </Text>
          {ogp_description?.length && (
            <Text noOfLines={1} color={textColor} fontSize="0.7rem" mt={2}>
              {ogp_description}
            </Text>
          )}
          {ogp_url?.length && (
            <Flex justifyContent="flex-start" alignItems="center" mt={3}>
              <Box w="14px" h="14px">
                <img
                  src={`${ogp_url}/favicon.ico`}
                  alt="favicon"
                  width="14px"
                  height="14px"
                />
              </Box>
              <Text color={textColor} fontSize="0.7rem" ml={2}>
                {ogp_url}
              </Text>
            </Flex>
          )}
        </Box>
        {ogp_image?.length && (
          <img
            src={`${ogp_image}`}
            alt="favicon"
            style={{
              aspectRatio: '1 /1',
              borderTopRightRadius: '9px',
              borderBottomRightRadius: '9px',
              objectFit: 'cover',
            }}
          />
        )}
      </Flex>
    </Box>
  )
}

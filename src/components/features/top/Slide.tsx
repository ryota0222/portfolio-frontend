import React, { useMemo } from 'react'
import { Flex } from '@chakra-ui/react'
import useSp from '@/hooks/useSp'

const SLIDE_LIST = [
  {
    page: 1,
    link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcSvUahcxaXv6ljPa0GnRVK%2FWCM%3Fpage-id%3D38%253A2%26node-id%3D38%253A3%26viewport%3D465%252C559%252C0.09%26scaling%3Dcontain%26starting-point-node-id%3D38%253A3',
    title: '良いデザインって??',
  },
  {
    page: 2,
    link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYMVaY2koGrP1fugOirBLe3%2F%25E3%2581%25A4%25E3%2581%25AA%25E3%2581%258C%25E3%2582%258B%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%3Fpage-id%3D202%253A1608%26node-id%3D202%253A1609%26viewport%3D838%252C456%252C0.11%26scaling%3Dcontain%26starting-point-node-id%3D202%253A1609',
    title: 'タイムキーパーについて考えてみた',
  },
  {
    page: 3,
    link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYMVaY2koGrP1fugOirBLe3%2F%25E3%2581%25A4%25E3%2581%25AA%25E3%2581%258C%25E3%2582%258B%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%3Fpage-id%3D201%253A2%26node-id%3D201%253A3%26viewport%3D713%252C632%252C0.13%26scaling%3Dcontain%26starting-point-node-id%3D201%253A3',
    title: 'UX エンジニアって？？',
  },
  {
    page: 4,
    link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcSvUahcxaXv6ljPa0GnRVK%2FWCM%3Fpage-id%3D38%253A2%26node-id%3D38%253A3%26viewport%3D465%252C559%252C0.09%26scaling%3Dcontain%26starting-point-node-id%3D38%253A3',
    title: '良いデザインって??',
  },
  //   {
  //     page: 5,
  //     link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fm8W5QHbOgu1CxhiYTTS69s%2F%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%25E8%25B3%2587%25E6%2596%2599%3Fpage-id%3D0%253A1%26node-id%3D112%253A316%26starting-point-node-id%3D2%253A3',
  //     title: 'UI StackとReact.js',
  //   },
  //   {
  //     page: 6,
  //     link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYMVaY2koGrP1fugOirBLe3%2F%25E3%2581%25A4%25E3%2581%25AA%25E3%2581%258C%25E3%2582%258B%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%3Fpage-id%3D201%253A393%26node-id%3D201%253A394%26viewport%3D1508%252C1822%252C0.33%26scaling%3Dcontain%26starting-point-node-id%3D201%253A394',
  //     title: 'フロントエンジニアがデザイナーになって気づいたこと',
  //   },
  //   {
  //     page: 7,
  //     link: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYMVaY2koGrP1fugOirBLe3%2F%25E3%2581%25A4%25E3%2581%25AA%25E3%2581%258C%25E3%2582%258B%25E5%258B%2589%25E5%25BC%25B7%25E4%25BC%259A%3Fpage-id%3D201%253A1102%26node-id%3D201%253A1387%26viewport%3D2676%252C56%252C0.28%26scaling%3Dmin-zoom%26starting-point-node-id%3D201%253A1103',
  //     title: 'Figmaがエンジニアに最適だと思う話',
  //   },
]

interface Props {
  totalCount: number
}

const Slide = () => {
  const [isSp] = useSp()
  return (
    <Flex justifyContent={'space-between'} flexWrap="wrap" my={16}>
      <iframe
        style={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
        }}
        width={'100%'}
        height={400}
        src={SLIDE_LIST[0].link}
        allowFullScreen
      ></iframe>
    </Flex>
  )
}

export default Slide

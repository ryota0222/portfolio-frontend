import { useDisclosure, Button, Text } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { ModalComponent } from '.'

const DUMMY_TEXT = `私は当時じっとどんな持人に対する訳の日に見せるあるう。

もし前に活動論はもしこうした関係なませでもに云おているだをも意味しないましば、そうには述べらしくましませた。世間からいるたのもいったい大体にしっくりたませです。`

export default {
  title: 'Design System/Organisms/Modal',
  component: ModalComponent,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    contents: {
      defaultValue: DUMMY_TEXT,
      description: '中身',
      table: {
        type: { summary: 'string | ReactNode' },
        defaultValue: { summary: DUMMY_TEXT },
      },
      control: {
        type: 'text',
      },
    },
    header: {
      defaultValue: 'タイトル',
      description: 'ヘッダー',
      table: {
        type: { summary: 'string | ReactNode' },
        defaultValue: { summary: 'タイトル' },
      },
      control: {
        type: 'text',
      },
    },
    footer: {
      defaultValue: undefined,
      description: 'フッター',
      table: {
        type: { summary: 'string | ReactNode' },
        defaultValue: { summary: undefined },
      },
      control: {
        type: 'text',
      },
    },
    isOpen: {
      type: { name: 'boolean', required: true },
      defaultValue: true,
      description: 'モーダルの開閉フラグ',
      table: {
        type: {
          summary: 'boolean',
          detail: 'trueならモーダルを開く',
        },
        defaultValue: { summary: true },
      },
      control: {
        type: null,
      },
    },
    onClose: {
      description: '閉じるアクション',
      table: {
        type: {
          summary: 'UseModalProps["onClose"]',
        },
      },
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof ModalComponent>

const ModalWrapper = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <ModalComponent
        contents={args.contents}
        header={args?.header}
        footer={args?.footer}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

const Template: ComponentStory<typeof ModalComponent> = (args) => (
  <ModalWrapper {...args} />
)

const Title = () => <Text color="red">タイトル</Text>

const Footer = () => (
  <>
    <Button colorScheme="blue" mr={3}>
      Save
    </Button>
    <Button>Cancel</Button>
  </>
)

export const PlaneText = Template.bind({})

PlaneText.args = {
  contents: DUMMY_TEXT,
  header: 'タイトル',
  footer: 'フッター',
}

PlaneText.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A1270',
  },
}

export const Component = Template.bind({})

Component.args = {
  contents: DUMMY_TEXT,
  header: <Title />,
  footer: <Footer />,
}

Component.parameters = {
  ...PlaneText.parameters,
}

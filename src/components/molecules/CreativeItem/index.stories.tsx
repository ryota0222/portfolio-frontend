import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { CreativeItem } from './'

export default {
  title: 'Design System/Molecules/CreativeItem',
  component: CreativeItem,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    title: {
      type: { name: 'string', required: false },
      defaultValue: 'タイトル',
      description: 'ブログのタイトル',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'タイトル' },
      },
      control: { type: 'text' },
    },
    description: {
      type: { name: 'string', required: false },
      defaultValue: '概要文',
      description: '概要文',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'タイトル' },
      },
      control: { type: 'text' },
    },
    image: {
      type: { name: 'string', required: true },
      defaultValue: '',
      description: '画像データ',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'image' },
      },
      control: {
        type: 'text',
      },
    },
    github: {
      type: { name: 'string', required: false },
      defaultValue: '',
      description: 'githubのリンク',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'github' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof CreativeItem>

const Template: ComponentStory<typeof CreativeItem> = (args) => (
  <CreativeItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  description:
    'DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription',
  image: 'https://source.unsplash.com/random',
  github: 'https://github.com/RyoTa0222',
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=20%3A1049',
  },
}

export const ImageOnly = Template.bind({})
ImageOnly.args = {
  ...Default.args,
  title: '',
  description: '',
}

ImageOnly.parameters = {
  ...Default.parameters,
}

export const NoGithub = Template.bind({})
NoGithub.args = {
  ...Default.args,
  github: '',
}

NoGithub.parameters = {
  ...Default.parameters,
}

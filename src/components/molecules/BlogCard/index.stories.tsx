import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BlogCard } from './'

const icons = {
  rabbit: '🐰',
  book: '📖',
  rocket: '🚀',
  smile: '😀',
}

export default {
  title: 'Design System/Atoms/BlogCard',
  component: BlogCard,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    image: {
      type: { name: 'string', required: false },
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
    icon: {
      description: 'ブログのカテゴリに表示するアイコン',
      defaultValue: icons.rabbit,
      summary: 'string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: icons.rabbit },
      },
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
      },
    },
    label: {
      type: { name: 'string', required: false },
      defaultValue: 'タイトル',
      description: 'ブログのタイトル',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'タイトル' },
      },
      control: { type: 'text' },
    },
    loading: {
      type: { name: 'boolean', required: true },
      defaultValue: false,
      description: 'ローディング中であればTrue',
      table: {
        type: {
          summary: 'boolean',
          detail: 'ローディング中であればTrue',
        },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
  },
} as ComponentMeta<typeof BlogCard>

const Template: ComponentStory<typeof BlogCard> = (args) => (
  <BlogCard {...args} />
)

export const Default = Template.bind({})

Default.args = {
  image: 'https://source.unsplash.com/random',
  icon: icons.rabbit,
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=1%3A349',
  },
}

export const Loading = Template.bind({})

Loading.args = {
  loading: true,
}

Loading.parameters = {
  ...Default.parameters,
}

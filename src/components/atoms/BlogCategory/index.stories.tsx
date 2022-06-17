import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BlogCategory } from './BlogCategory'

const icons = {
  rabbit: '🐰',
  book: '📖',
  rocket: '🚀',
  smile: '😀',
}

export default {
  title: 'Design System/Atoms/BlogCategory',
  component: BlogCategory,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    icon: {
      description: 'ブログのカテゴリに表示するアイコン',
      defaultValue: undefined,
      summary: 'string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
      },
    },
    size: {
      description: '大きさ',
      defaultValue: 'lg',
      table: {
        type: { summary: 'Size' },
        defaultValue: { summary: 'lg' },
      },
      options: ['lg', 'sm'],
      control: { type: 'radio' },
    },
    label: {
      type: { name: 'string', required: true },
      defaultValue: 'ラベル',
      description: 'ラベル',
      table: {
        type: {
          summary: 'string',
          detail: 'ブログカテゴリのラベル',
        },
        defaultValue: { summary: 'ラベル' },
      },
    },
  },
} as ComponentMeta<typeof BlogCategory>

const Template: ComponentStory<typeof BlogCategory> = (args) => (
  <BlogCategory {...args} />
)

export const Large = Template.bind({})

Large.args = {
  size: 'lg',
  icon: '🐰',
  label: 'フロントエンド',
}

Large.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=3%3A8',
  },
}

export const Small = Template.bind({})

Small.args = {
  ...Large.args,
  size: 'sm',
}

Small.parameters = {
  ...Large.parameters,
}

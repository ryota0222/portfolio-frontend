import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BlogMenuItem } from './'

export default {
  title: 'Design System/Molecules/BlogMenuItem',
  component: BlogMenuItem,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    folder: {
      description: 'フォルダの数',
      defaultValue: 5,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
      control: { type: 'range', min: 0, max: 30 },
    },
    file: {
      description: 'ファイルの数',
      defaultValue: 3,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3 },
      },
      control: { type: 'range', min: 0, max: 30 },
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
    selected: {
      type: { name: 'boolean', required: true },
      defaultValue: false,
      description: 'Trueであれば選択中',
      table: {
        type: {
          summary: 'boolean',
          detail: 'Trueであれば選択中',
        },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
  },
} as ComponentMeta<typeof BlogMenuItem>

const Template: ComponentStory<typeof BlogMenuItem> = (args) => (
  <BlogMenuItem {...args}>サンプル</BlogMenuItem>
)

export const Default = Template.bind({})

Default.args = {
  folder: 5,
  file: 3,
  loading: false,
  selected: false,
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=4%3A292',
  },
}

export const Loading = Template.bind({})

Loading.args = {
  ...Default.args,
  loading: true,
}

Loading.parameters = {
  ...Default.parameters,
}

export const Selected = Template.bind({})

Selected.args = {
  ...Default.args,
  selected: true,
}

Selected.parameters = {
  ...Default.parameters,
}

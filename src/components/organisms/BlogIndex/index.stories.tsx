import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BlogIndexItem } from '@/types/interface'
import { BlogIndex, Props } from '.'

const SAMPLE: BlogIndexItem[] = [
  {
    label: 'タイトルh1',
    type: 'h1',
    index: 0,
  },
  {
    label: 'タイトルh2',
    type: 'h2',
    index: 1,
  },
  {
    label: 'タイトルh3',
    type: 'h3',
    index: 2,
  },
  {
    label: 'タイトルh4',
    type: 'h4',
    index: 3,
  },
  {
    label: 'タイトルh5',
    type: 'h5',
    index: 4,
  },
  {
    label: 'タイトルh6',
    type: 'h6',
    index: 5,
  },
  {
    label: 'タイトルh2',
    type: 'h2',
    index: 6,
  },
  {
    label: 'タイトルh1',
    type: 'h1',
    index: 7,
  },
]

export default {
  title: 'Design System/Organisms/BlogIndex',
  component: BlogIndex,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    currentIndex: {
      type: { name: 'number', required: true },
      defaultValue: 0,
      description: '数値',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      control: {
        type: 'range',
        min: 0,
        max: SAMPLE.length - 1,
        step: 1,
      },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <BlogIndex {...args} />

export const Default = Template.bind({})

Default.args = {
  list: SAMPLE,
  currentIndex: 0,
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A1197',
  },
}

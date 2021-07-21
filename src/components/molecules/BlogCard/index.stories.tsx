import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BlogCard, Props } from '.'

export default {
  title: 'Design System/Atoms/BlogCard',
  component: BlogCard,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    imageData: {
      type: { name: 'string | null', required: true },
      defaultValue: 'imageData',
      description: '画像データ',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'imageData' },
      },
      control: {
        type: 'text',
      },
    },
    title: {
      type: { name: 'string', required: false },
      defaultValue: 'タイトルタイトルタイトル',
      description: 'ブログのタイトル',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'タイトルタイトルタイトル' },
      },
      control: { type: 'text' },
    },
    tagName: {
      type: { name: 'string', required: false },
      defaultValue: 'タイトルタイトルタイトル',
      description: 'ブログのタイトル',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'タイトルタイトルタイトル' },
      },
      control: { type: 'text' },
    },
    tagBg: {
      type: { name: 'string', required: true },
      defaultValue: '#48BDFF',
      description: 'TypeScript',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#48BDFF' },
      },
      control: 'color',
    },
  },
} as Meta

const Template: Story<Props> = (args) => <BlogCard {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'タイトルタイトルタイトル',
  imageData: 'https://bit.ly/sage-adebayo',
  tagName: 'TypeScript',
  tagBg: '#48BDFF',
}
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A885',
  },
}

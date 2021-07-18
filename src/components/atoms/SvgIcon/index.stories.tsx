import { Story, Meta } from '@storybook/react'
import { SvgIcon, Props } from '.'
import { SVG_ICON_NAME_LIST } from '@/consts/config'

export default {
  title: 'Design System/Atoms/SvgIcon',
  component: SvgIcon,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
  ],
  argTypes: {
    name: {
      type: { name: 'SvgIconName[]', required: true },
      defaultValue: 'circle-check',
      options: SVG_ICON_NAME_LIST,
      description: 'アイコンの名前',
      table: {
        type: { summary: 'SvgIconName[]' },
        defaultValue: { summary: 'circle-check' },
      },
      control: { type: 'select' },
    },
    color: {
      type: { name: 'string', required: false },
      defaultValue: '#FFFFFF',
      description: '色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#FFFFFF' },
      },
      control: 'color',
    },
    width: {
      type: { name: 'string', required: false },
      defaultValue: '50px',
      description: '幅',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '50px' },
      },
      control: {
        type: 'text',
      },
    },
    height: {
      type: { name: 'string', required: false },
      defaultValue: '50px',
      description: '高さ',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '50px' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <SvgIcon {...args}></SvgIcon>

export const Default = Template.bind({})

Default.args = {
  name: 'circle-check',
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A864',
  },
}

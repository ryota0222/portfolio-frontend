import { Story, Meta } from '@storybook/react'
import { Tag, Props } from '.'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Design System/Atoms/Tag',
  component: Tag,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    bg: {
      type: { name: 'string', required: false },
      defaultValue: '#ff0000',
      description: '背景色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#ff0000' },
      },
      control: 'color',
    },
  },
} as Meta

const Template: Story<Props> = (args) => <Tag {...args}>sample</Tag>

export const Default = Template.bind({})

Default.args = {
  bg: '#ff0000',
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A864',
  },
}

import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Logo, Props } from '.'

export default {
  title: 'Design System/Atoms/Logo',
  component: Logo,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
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

const Template: Story<Props> = (args) => <Logo {...args}></Logo>

export const Default = Template.bind({})

Default.args = {}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A993',
  },
}

import { Story, Meta } from '@storybook/react'
import { Panel, Props } from '.'

export default {
  title: 'Design System/Atoms/Panel',
  component: Panel,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
  ],
  argTypes: {
    width: {
      type: { name: 'string', required: false },
      defaultValue: '100%',
      description: '幅',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100%' },
      },
      control: {
        type: 'text',
      },
    },
    height: {
      type: { name: 'string', required: false },
      defaultValue: '40px',
      description: '高さ',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '40px' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <Panel {...args}>sample</Panel>

export const Default = Template.bind({})

Default.args = {
  width: '240px',
  height: '120px',
}

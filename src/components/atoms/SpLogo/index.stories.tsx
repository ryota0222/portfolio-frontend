import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { SpLogo } from '.'

export default {
  title: 'Design System/Atoms/SpLogo',
  component: SpLogo,
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
} as ComponentMeta<typeof SpLogo>

const Template: ComponentStory<typeof SpLogo> = (args) => (
  <SpLogo {...args}></SpLogo>
)

export const Default = Template.bind({})

Default.args = {}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=177%3A2916',
  },
}

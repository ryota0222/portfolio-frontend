import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Menu } from './Menu'

export default {
  title: 'Design System/Organisms/Menu',
  component: Menu,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
  ],
  argTypes: {},
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = () => <Menu />

export const Default = Template.bind({})

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=38%3A775',
  },
}

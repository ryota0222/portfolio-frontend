import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { HeaderComponent } from '.'

export default {
  title: 'Design System/Organisms/Header',
  component: HeaderComponent,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {},
} as Meta

const Template: Story = () => <HeaderComponent />

export const Default = Template.bind({})

Default.args = {}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=156%3A1404',
  },
}

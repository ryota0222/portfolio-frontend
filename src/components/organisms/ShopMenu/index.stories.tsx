import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { ShopMenu, Props } from '.'

export default {
  title: 'Design System/Organisms/ShopMenu',
  component: ShopMenu,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <ShopMenu />

export const Default = Template.bind({})

Default.args = {}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A2043',
  },
}

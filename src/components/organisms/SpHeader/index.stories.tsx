import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { SpHeaderComponent } from '.'

export default {
  title: 'Design System/Organisms/SpHeader',
  component: SpHeaderComponent,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {},
} as ComponentMeta<typeof SpHeaderComponent>

const Template: ComponentStory<typeof SpHeaderComponent> = () => (
  <SpHeaderComponent />
)

export const Default = Template.bind({})

Default.args = {}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A1788',
  },
}

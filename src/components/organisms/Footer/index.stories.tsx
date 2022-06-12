import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { FooterComponent } from './Footer'

export default {
  title: 'Design System/Organisms/Footer',
  component: FooterComponent,
  decorators: [(story: any) => <div>{story()}</div>, withDesign],
  argTypes: {},
} as ComponentMeta<typeof FooterComponent>

const Template: ComponentStory<typeof FooterComponent> = () => (
  <FooterComponent />
)

export const Default = Template.bind({})

Default.args = {}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=4%3A667',
  },
  nextRouter: {
    route: '/',
  },
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { AppFooter } from './Footer'

export default {
  title: 'Design System/Organisms/Footer',
  component: AppFooter,
  decorators: [(story: any) => <div>{story()}</div>, withDesign],
  argTypes: {},
} as ComponentMeta<typeof AppFooter>

const Template: ComponentStory<typeof AppFooter> = () => <AppFooter />

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

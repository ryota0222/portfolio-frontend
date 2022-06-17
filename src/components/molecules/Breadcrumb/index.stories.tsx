import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Breadcrumb } from '.'

export default {
  title: 'Design System/Molecules/Breadcrumb',
  component: Breadcrumb,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {},
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
)

export const Default = Template.bind({})

Default.args = {
  tag: {
    label: 'sample',
    color: '#F00',
    tag_id: 'tag_id',
    id: 'id',
  },
  series: {
    name: 'sample',
    slug: 'slug',
  },
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=4%3A301',
  },
}

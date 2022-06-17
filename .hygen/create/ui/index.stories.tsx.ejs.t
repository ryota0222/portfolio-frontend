---
to: <%= abs_path %>/index.stories.tsx
---
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { <%= component_name %> } from "./"

export default {
  title: "Design System/<%= atomic_title %>/<%= component_name %>",
  component: <%= component_name %>,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {}
} as ComponentMeta<typeof <%= component_name %>>



const Template: ComponentStory<typeof <%= component_name %>> = (args) => <<%= component_name %> {...args} />

export const Default = Template.bind({})

Default.args = {}

Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
}

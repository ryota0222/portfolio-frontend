import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { RoadmapListItem, Props } from '.'

export default {
  title: 'Design System/Atoms/RoadmapListItem',
  component: RoadmapListItem,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    complete: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: '完了したかどうかのフラグ',
      table: {
        type: {
          summary: 'boolean',
          detail: 'trueなら完了',
        },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
  },
} as Meta

const Template: Story<Props> = (args) => (
  <RoadmapListItem {...args}>sample</RoadmapListItem>
)

export const Default = Template.bind({})

Default.args = {}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A1066',
  },
}

export const Completed = Template.bind({})

Completed.args = {
  complete: true,
}

Completed.parameters = {
  ...Default.parameters,
}

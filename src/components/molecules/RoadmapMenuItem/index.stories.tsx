import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { ROADMAP_TYPE } from '@/consts/config'
import { Props } from '.'
import RoadmapMenuItem from '.'

export default {
  title: 'Design System/Molecules/RoadmapMenuItem',
  component: RoadmapMenuItem,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    roadmapType: {
      type: { name: 'RoadmapType[]', required: true },
      defaultValue: 'schedule',
      options: ROADMAP_TYPE,
      description: 'ロードマップのタイプ',
      table: {
        type: { summary: 'RoadmapType[]' },
        defaultValue: { summary: 'schedule' },
      },
      control: { type: 'select' },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <RoadmapMenuItem {...args} />

export const Schedule = Template.bind({})

Schedule.args = {
  roadmapType: 'schedule',
}

export const Develop = Template.bind({})

Develop.args = {
  roadmapType: 'develop',
}

Develop.parameters = {
  ...Schedule.parameters,
}

export const Merge = Template.bind({})

Merge.args = {
  roadmapType: 'merge',
}

Merge.parameters = {
  ...Schedule.parameters,
}

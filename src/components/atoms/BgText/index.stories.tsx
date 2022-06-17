import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BgText } from '.'

export default {
  title: 'Design System/Atoms/BgText',
  component: BgText,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    size: {
      description: '大きさ',
      defaultValue: 'sm',
      table: {
        type: { summary: 'Size' },
        defaultValue: { summary: 'sm' },
      },
      options: ['lg', 'sm'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof BgText>

const Template: ComponentStory<typeof BgText> = (args) => (
  <BgText {...args}></BgText>
)

export const Large = Template.bind({})

Large.args = {
  size: 'lg',
}

Large.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=20%3A733',
  },
}

export const Small = Template.bind({})
Small.args = {
  ...Large.args,
  size: 'sm',
}
Small.parameters = {
  ...Large.parameters,
}

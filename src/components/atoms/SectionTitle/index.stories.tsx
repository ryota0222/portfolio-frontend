import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { SectionTitle } from '.'

export default {
  title: 'Design System/Atoms/SectionTitle',
  component: SectionTitle,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    size: {
      description: '大きさ',
      defaultValue: 'lg',
      table: {
        type: { summary: 'Size' },
        defaultValue: { summary: 'lg' },
      },
      options: ['lg', 'sm'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof SectionTitle>

const Template: ComponentStory<typeof SectionTitle> = (args) => (
  <SectionTitle {...args}>Section Title</SectionTitle>
)

export const Large = Template.bind({})

Large.args = {
  size: 'lg',
}

Large.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=20%3A233',
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

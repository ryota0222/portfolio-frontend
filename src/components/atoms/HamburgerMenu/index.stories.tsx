import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { HamburgerMenu } from './'

export default {
  title: 'Design System/Atoms/HamburgerMenu',
  component: HamburgerMenu,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    isOpen: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: '閉じているかどうかのフラグ',
      table: {
        type: { summary: 'boolean', detail: '閉じているかどうかのフラグ' },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
  },
} as ComponentMeta<typeof HamburgerMenu>

const Template: ComponentStory<typeof HamburgerMenu> = (args) => (
  <HamburgerMenu {...args} />
)

export const Open = Template.bind({})

Open.args = {
  isOpen: true,
}

Open.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=502%3A2912',
  },
}

export const Close = Template.bind({})

Close.args = {
  isOpen: false,
}

Close.parameters = {
  ...Open.parameters,
}

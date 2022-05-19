import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Btn } from '.'

export default {
  title: 'Design System/Atoms/Button',
  component: Btn,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    scheme: {
      description: 'カラースキーマ',
      defaultValue: 'primary',
      table: {
        type: { summary: 'ButtonScheme' },
        defaultValue: { summary: 'primary' },
      },
      options: ['primary', 'secondary', 'danger', 'info'],
      control: { type: 'radio' },
    },
    onClick: {
      description: 'クリックイベントが発生した際の処理',
      table: {
        type: { summary: 'Function' },
      },
      action: 'clicked',
    },
    variant: {
      defaultValue: 'solid',
      description: 'ボタンのタイプ',
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'solid' },
      },
      options: ['solid', 'outline'],
      control: { type: 'radio' },
    },
    round: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'ボタンの両サイドの丸くするかのフラグ',
      table: {
        type: { summary: 'boolean', detail: 'trueの時、角丸のボタンにする' },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
    floating: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'ボタンに影をつける',
      table: {
        type: { summary: 'boolean', detail: 'trueの時、影をつける' },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
    neumorphic: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'ニューモーフィズムにする',
      table: {
        type: {
          summary: 'boolean',
          detail: 'trueの時、ニューモーフィズムにする',
        },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
  },
} as ComponentMeta<typeof Btn>

const Template: ComponentStory<typeof Btn> = (args) => (
  <Btn {...args}>sample</Btn>
)

export const Primary = Template.bind({})
Primary.args = {
  scheme: 'primary',
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=2%3A16',
  },
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  scheme: 'secondary',
}
Secondary.parameters = {
  ...Primary.parameters,
}

export const Danger = Template.bind({})
Danger.args = {
  ...Primary.args,
  scheme: 'danger',
}
Danger.parameters = {
  ...Primary.parameters,
}

export const Info = Template.bind({})
Info.args = {
  ...Primary.args,
  scheme: 'info',
}
Info.parameters = {
  ...Primary.parameters,
}

export const Outline = Template.bind({})
Outline.args = {
  ...Primary.args,
  variant: 'outline',
}
Outline.parameters = {
  ...Primary.parameters,
}

export const Round = Template.bind({})
Round.args = {
  ...Primary.args,
  round: true,
}
Round.parameters = {
  ...Primary.parameters,
}

export const Floating = Template.bind({})
Floating.args = {
  ...Primary.args,
  floating: true,
}
Floating.parameters = {
  ...Primary.parameters,
}

export const Neumorphic = Template.bind({})
Neumorphic.args = {
  ...Primary.args,
  neumorphic: true,
}
Neumorphic.parameters = {
  ...Primary.parameters,
}

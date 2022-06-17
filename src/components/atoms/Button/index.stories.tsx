import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AiFillBell } from 'react-icons/ai'
import { withDesign } from 'storybook-addon-designs'
import { AppButton } from './Button'

const Bell = <AiFillBell />
const None = undefined

const icons = { None, Bell }

export default {
  title: 'Design System/Atoms/Button',
  component: AppButton,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    icon: {
      description: 'ボタンのラベルの左に表示するアイコン',
      defaultValue: undefined,
      summary: 'React.ReactNode',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
      },
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
      },
    },
    scheme: {
      description: 'カラースキーマ',
      defaultValue: 'primary',
      table: {
        type: { summary: 'ButtonScheme' },
        defaultValue: { summary: 'primary' },
      },
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' },
    },
    variant: {
      defaultValue: 'fill',
      description: 'ボタンのタイプ',
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'fill' },
      },
      options: ['fill', 'outline'],
      control: { type: 'radio' },
    },
    round: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'ボタン丸くするかのフラグ',
      table: {
        type: { summary: 'boolean', detail: 'trueの時、角丸のボタンにする' },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
    processing: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: '処理中かどうかのフラグ',
      table: {
        type: {
          summary: 'boolean',
          detail: 'trueの時、処理中のUIにする',
        },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
    onClick: {
      description: 'クリックイベントが発生した際の処理',
      table: {
        type: { summary: 'Function' },
      },
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof AppButton>

const Template: ComponentStory<typeof AppButton> = (args) => (
  <AppButton {...args}>sample</AppButton>
)

export const Primary = Template.bind({})
Primary.args = {
  scheme: 'primary',
  onClick: () => console.log('call'),
  processing: false,
}
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=1%3A99',
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

export const Processing = Template.bind({})
Processing.args = {
  ...Primary.args,
  processing: true,
}
Processing.parameters = {
  ...Primary.parameters,
}

export const Icon = Template.bind({})
Icon.args = {
  ...Primary.args,
  icon: <AiFillBell />,
}
Icon.parameters = {
  ...Primary.parameters,
}

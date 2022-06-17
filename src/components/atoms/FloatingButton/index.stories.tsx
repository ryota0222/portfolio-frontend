import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { FloatingButton } from './'

export default {
  title: 'Design System/Atoms/FloatingButton',
  component: FloatingButton,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    onClick: {
      description: 'クリックイベントが発生した際の処理',
      table: {
        type: { summary: 'Function' },
      },
      action: 'clicked',
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
  },
} as ComponentMeta<typeof FloatingButton>

const Template: ComponentStory<typeof FloatingButton> = (args) => (
  <FloatingButton {...args}>サンプル</FloatingButton>
)

export const Default = Template.bind({})

Default.args = {
  onClick: () => console.log('call'),
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=44%3A1410',
  },
}

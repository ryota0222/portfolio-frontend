import { Story, Meta } from '@storybook/react'
import { LottieControl, Props } from '../Animation'

export default {
  title: 'Design System/Atoms/Animation',
  component: LottieControl,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
  ],
  argTypes: {
    width: {
      type: { name: 'string', required: true },
      defaultValue: '80px',
      description: '幅',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '80px' },
      },
      control: {
        type: 'text',
      },
    },
    height: {
      type: { name: 'string', required: true },
      defaultValue: '80px',
      description: '高さ',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '80px' },
      },
      control: {
        type: 'text',
      },
    },
    loop: {
      type: { name: 'boolean', required: false },
      defaultValue: true,
      description: 'ループ',
      table: {
        type: {
          summary: 'boolean',
          detail: 'trueならループ',
        },
        defaultValue: { summary: true },
      },
      controls: { expanded: true },
    },
    isReverse: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: '再生の向き',
      table: {
        type: {
          summary: 'boolean',
          detail: 'trueなら逆再生',
        },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
    /**
     * アニメーションデータ
     */
    animationData: {
      type: { name: 'string', required: false },
      defaultValue: '',
      description: 'アニメーションデータ',
      table: {
        type: { summary: 'json' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<Props> = (args) => (
  <LottieControl width="80px" height="80px" />
)

export const Default = Template.bind({})

Default.args = {
  loop: true,
  isReverse: false,
}

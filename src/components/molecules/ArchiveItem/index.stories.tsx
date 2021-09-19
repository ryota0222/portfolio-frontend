import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Props } from '.'
import ArchiveItem from '.'

export default {
  title: 'Design System/Atoms/ArchiveItem',
  component: ArchiveItem,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    count: {
      type: { name: 'number', required: false },
      defaultValue: '50px',
      description: '表示する数字。９９を超える場合は「99+」と表示する',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
    isActive: {
      type: { name: 'boolean', required: true },
      defaultValue: false,
      description: 'アクティブかどうかのフラグ',
      table: {
        type: {
          summary: 'boolean',
          detail: 'trueならアクティブ',
        },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
    onClick: {
      type: { name: 'Function', required: true },
      description: 'クリックイベントが発生した際の処理',
      table: {
        type: { summary: 'Function' },
      },
      action: 'clicked',
    },
  },
} as Meta

const Template: Story<Props> = (args) => <ArchiveItem {...args}></ArchiveItem>

export const Default = Template.bind({})

Default.args = {
  count: 5,
  isActive: false,
}

export const Active = Template.bind({})

Active.args = {
  ...Default.args,
  isActive: false,
}

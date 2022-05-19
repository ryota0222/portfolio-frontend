import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import ArchiveItem from '.'

export default {
  title: 'Design System/Molecules/ArchiveItem',
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
      description: 'クリックイベントが発生した際の処理',
      table: {
        type: { summary: 'Function' },
      },
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof ArchiveItem>

const Template: ComponentStory<typeof ArchiveItem> = (args) => (
  <ArchiveItem {...args}>テスト</ArchiveItem>
)

export const Default = Template.bind({})

Default.args = {
  count: 5,
  isActive: false,
}

export const Active = Template.bind({})

Active.args = {
  ...Default.args,
  isActive: true,
}

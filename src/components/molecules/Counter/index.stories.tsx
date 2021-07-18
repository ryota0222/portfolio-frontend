import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { COUNTER_TYPE } from '@/consts/config'
import { Counter, Props } from '.'

export default {
  title: 'Design System/Molecules/Counter',
  component: Counter,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    type: {
      type: { name: 'string', required: true },
      defaultValue: 'Countertype[]',
      description: 'カウンターのタイプ',
      options: COUNTER_TYPE,
      table: {
        type: { summary: 'Countertype[]' },
        defaultValue: { summary: 'good' },
      },
      control: {
        type: 'select',
      },
    },
    count: {
      type: { name: 'number', required: true },
      defaultValue: 10,
      description: '数値',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 },
      },
      control: {
        type: 'range',
        min: 0,
        step: 1,
      },
    },
    active: {
      type: { name: 'boolean', required: true },
      defaultValue: false,
      description: 'カウント済みかどうかのフラグ',
      table: {
        type: {
          summary: 'boolean',
          detail: 'trueならカウント済み',
        },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <Counter {...args} />

export const Active = Template.bind({})

Active.args = {
  type: 'good',
  count: 10,
  active: true,
}

Active.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A778',
  },
}

export const InActive = Template.bind({})

InActive.args = {
  type: 'good',
  count: 10,
  active: false,
}

InActive.parameters = {
  ...Active.parameters,
}

export const Good = Template.bind({})

Good.args = {
  type: 'good',
  count: 10,
  active: true,
}

Good.parameters = {
  ...Active.parameters,
}

export const Bad = Template.bind({})

Bad.args = {
  type: 'bad',
  count: 10,
  active: true,
}

Bad.parameters = {
  ...Active.parameters,
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import Counter from '.'

export default {
  title: 'Design System/Atoms/Counter',
  component: Counter,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    number: {
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
  },
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args}></Counter>
)

export const Default = Template.bind({})

Default.args = {
  number: 5,
}

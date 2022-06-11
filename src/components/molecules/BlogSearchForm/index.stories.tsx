import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BlogSearchForm } from './'

export default {
  title: 'Design System/Molecules/BlogSearchForm',
  component: BlogSearchForm,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    value: {
      type: { name: 'string', required: false },
      defaultValue: '',
      description: '入力された文字列',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '入力された文字列' },
      },
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof BlogSearchForm>

const Template: ComponentStory<typeof BlogSearchForm> = (args) => (
  <BlogSearchForm {...args} />
)

export const Default = Template.bind({})

Default.args = {
  clear: () => console.log('ACTION: clear'),
  onChange: () => console.log('ACTION: clear'),
  onKeyPress: () => console.log('ACTION: clear'),
  value: 'sample',
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=43%3A2418',
  },
}

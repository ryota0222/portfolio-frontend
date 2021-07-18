import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { TagLabel, Props } from '.'

export default {
  title: 'Design System/Atoms/TagLabel',
  component: TagLabel,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    color: {
      type: { name: 'string', required: true },
      defaultValue: '#ff0000',
      description: 'タグの色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#ff0000' },
      },
      control: 'color',
    },
    label: {
      type: { name: 'string', required: true },
      defaultValue: 'sample',
      description: 'ラベル',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sample' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <TagLabel {...args}></TagLabel>

export const Default = Template.bind({})

Default.args = {
  label: 'sample',
  color: '#FF0000',
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A972',
  },
}

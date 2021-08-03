import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { PAGE_NAME } from '@/consts/config'
import { PageNation, Props } from '.'

export default {
  title: 'Design System/Organisms/PageNation',
  component: PageNation,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    total: {
      type: { name: 'number', required: true },
      defaultValue: 5,
      description: '合計のページ数',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
      control: { type: 'number' },
    },
    currentPage: {
      type: { name: 'number', required: true },
      defaultValue: 2,
      description: '現在のページ',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 2 },
      },
      control: { type: 'number' },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <PageNation {...args} />

export const Default = Template.bind({})

Default.args = {
  total: 5,
  currentPage: 2,
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A2166',
  },
}

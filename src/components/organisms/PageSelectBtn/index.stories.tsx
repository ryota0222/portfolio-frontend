import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { PAGE_NAME } from '@/consts/config'
import { PageSelectBtn, Props } from '.'

export default {
  title: 'Design System/Organisms/PageSelectBtn',
  component: PageSelectBtn,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    name: {
      type: { name: 'PageName', required: true },
      defaultValue: 'portfolio',
      description: 'ページ名',
      options: PAGE_NAME,
      table: {
        type: { summary: 'PageName' },
        defaultValue: { summary: 'portfolio' },
      },
      control: { type: 'select' },
    },
    currentPage: {
      type: { name: 'string', required: false },
      defaultValue: '/portfolio',
      description: '現在のパス',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/portfolio' },
      },
      control: {
        type: null,
      },
    },
    handlePageTransition: {
      type: { name: 'Function', required: true },
      description: 'クリックイベントが発生した際の処理',
      table: {
        type: { summary: 'Function' },
      },
      action: 'clicked',
    },
  },
} as Meta

const Template: Story<Props> = (args) => <PageSelectBtn {...args} />

export const Active = Template.bind({})

Active.args = {
  name: 'portfolio',
  currentPage: '/portfolio',
}

Active.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=315%3A1207',
  },
}

export const NotActive = Template.bind({})

NotActive.args = {
  ...Active.args,
  currentPage: '/blog',
}

NotActive.parameters = {
  ...Active.parameters,
}

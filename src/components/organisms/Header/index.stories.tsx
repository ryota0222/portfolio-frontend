import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { AppHeader } from './Header'

export default {
  title: 'Design System/Organisms/Header',
  component: AppHeader,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    pathname: {
      type: { name: 'string', required: false },
      defaultValue: '',
      description: 'パス名',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'パス名' },
      },
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof AppHeader>

const Template: ComponentStory<typeof AppHeader> = (args) => (
  <AppHeader {...args} />
)

export const Top = Template.bind({})

Top.args = {
  pathname: '/',
}

Top.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=4%3A1138',
  },
}

export const Blog = Template.bind({})

Blog.args = {
  pathname: '/blogs',
}

Blog.parameters = {
  ...Top.parameters,
}

export const News = Template.bind({})

News.args = {
  pathname: '/news',
}

News.parameters = {
  ...Top.parameters,
}

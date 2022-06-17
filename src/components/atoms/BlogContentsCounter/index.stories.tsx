import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BlogContentsCounter } from '.'

export default {
  title: 'Design System/Atoms/BlogContentsCounter',
  component: BlogContentsCounter,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    folder: {
      description: 'フォルダの数',
      defaultValue: 5,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
      control: { type: 'range', min: 0, max: 30 },
    },
    file: {
      description: 'ファイルの数',
      defaultValue: 3,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3 },
      },
      control: { type: 'range', min: 0, max: 30 },
    },
  },
} as ComponentMeta<typeof BlogContentsCounter>

const Template: ComponentStory<typeof BlogContentsCounter> = (args) => (
  <BlogContentsCounter {...args}>Section Title</BlogContentsCounter>
)

export const Default = Template.bind({})

Default.args = {
  folder: 5,
  file: 3,
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=43%3A2201',
  },
}

export const FolderOnly = Template.bind({})

FolderOnly.args = {
  ...Default.args,
  file: 0,
}

FolderOnly.parameters = {
  ...Default.parameters,
}

export const FileOnly = Template.bind({})

FileOnly.args = {
  ...Default.args,
  folder: 0,
}

FileOnly.parameters = {
  ...Default.parameters,
}

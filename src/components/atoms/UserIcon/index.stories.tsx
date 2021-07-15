import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { UserIcon, Props } from '.'

export default {
    title: 'Design System/Atoms/UserIcon',
    component: UserIcon,
    decorators: [
        (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    imageData: {
        type: { name: 'string | null', required: true },
        defaultValue: 'imageData',
        description: '画像データ',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: 'imageData' },
        },
        control: {
            type: 'text',
        },
    },
    size: {
        type: { name: 'Size', required: false },
        defaultValue: 'md',
        description: 'サイズ',
        table: {
          type: { summary: 'Size' },
          defaultValue: { summary: 'md' },
        },
        options: ["sm", "md", "lg", "xl", "2xl", "full", "2xs", "xs"],
        control: { type: 'radio' },
      },
  }
} as Meta

const Template: Story<Props> = (args) => <UserIcon {...args} />

export const Default = Template.bind({})
Default.args = {
    size: "md",
    imageData: null
}
Default.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=158%3A1589',
    },
  }

  export const Image = Template.bind({})
  Image.args = {
      ...Default.args,
      imageData: "https://bit.ly/dan-abramov"
  }
  Image.parameters = {
      ...Default.parameters
    }

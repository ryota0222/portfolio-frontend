import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Intro, Props } from '.'

export default {
  title: 'Design System/Molecules/Intro',
  component: Intro,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    imageData: {
      type: { name: 'string | null', required: true },
      defaultValue: null,
      description: '画像データ',
      table: {
        type: { summary: 'string | null' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'text',
      },
    },
    name: {
      type: { name: 'string | null', required: true },
      defaultValue: 'RyoTa.',
      description: '名前',
      table: {
        type: { summary: 'string | null' },
        defaultValue: { summary: 'RyoTa.' },
      },
      control: {
        type: 'text',
      },
    },
    intro: {
      type: { name: 'string | null', required: false },
      defaultValue: '',
      description: '説明文',
      table: {
        type: { summary: 'string | null' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <Intro {...args} />

export const Default = Template.bind({})

Default.args = {
  imageData:
    'https://images.ctfassets.net/6c3h1vzo5ct6/3rBIZHnfUXZQB5WAH3bUjU/0dd8f5c012efb124d2b645a086472902/until-release-portfolio-architecture.png',
  name: 'RyoTa.',
  intro:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a metus phasellus duis sed purus sollicitudin. Phasellus',
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=160%3A921',
  },
}

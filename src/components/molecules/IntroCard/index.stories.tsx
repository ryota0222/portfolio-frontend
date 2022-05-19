import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { IntroCard } from '.'

export default {
  title: 'Design System/Molecules/IntroCard',
  component: IntroCard,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    imageData: {
      type: { name: 'string', required: true },
      defaultValue: null,
      description: '画像データ',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: null },
      },
      control: {
        type: 'text',
      },
    },
    name: {
      type: { name: 'string', required: true },
      defaultValue: 'RyoTa.',
      description: '名前',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'RyoTa.' },
      },
      control: {
        type: 'text',
      },
    },
    description: {
      type: { name: 'string', required: false },
      defaultValue: '',
      description: '説明文',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'text',
      },
    },
    twitter: {
      type: { name: 'string', required: false },
      defaultValue: '',
      description: 'twitterのURL',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'text',
      },
    },
    github: {
      type: { name: 'string', required: false },
      defaultValue: '',
      description: 'githubのURL',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof IntroCard>

const Template: ComponentStory<typeof IntroCard> = (args) => (
  <IntroCard {...args} />
)

export const Default = Template.bind({})

Default.args = {
  imageData:
    'https://images.ctfassets.net/6c3h1vzo5ct6/3rBIZHnfUXZQB5WAH3bUjU/0dd8f5c012efb124d2b645a086472902/until-release-portfolio-architecture.png',
  name: 'RyoTa.',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a metus phasellus duis sed purus sollicitudin. Phasellus',
  twitter: 'https://twitter.com/RyoTa___0222',
  github: 'https://github.com/RyoTa0222',
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=6%3A32',
  },
}

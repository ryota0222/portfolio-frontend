import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BlogCard } from './'

const icons = {
  rabbit: 'ð°',
  book: 'ð',
  rocket: 'ð',
  smile: 'ð',
}

export default {
  title: 'Design System/Atoms/BlogCard',
  component: BlogCard,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    image: {
      type: { name: 'string', required: false },
      defaultValue: '',
      description: 'ç»åãã¼ã¿',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'image' },
      },
      control: {
        type: 'text',
      },
    },
    title: {
      type: { name: 'string', required: false },
      defaultValue: 'ã¿ã¤ãã«',
      description: 'ãã­ã°ã®ã¿ã¤ãã«',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ã¿ã¤ãã«' },
      },
      control: { type: 'text' },
    },
    icon: {
      description: 'ãã­ã°ã®ã«ãã´ãªã«è¡¨ç¤ºããã¢ã¤ã³ã³',
      defaultValue: icons.rabbit,
      summary: 'string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: icons.rabbit },
      },
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
      },
    },
    label: {
      type: { name: 'string', required: false },
      defaultValue: 'ã¿ã¤ãã«',
      description: 'ãã­ã°ã®ã¿ã¤ãã«',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ã¿ã¤ãã«' },
      },
      control: { type: 'text' },
    },
    loading: {
      type: { name: 'boolean', required: true },
      defaultValue: false,
      description: 'ã­ã¼ãã£ã³ã°ä¸­ã§ããã°True',
      table: {
        type: {
          summary: 'boolean',
          detail: 'ã­ã¼ãã£ã³ã°ä¸­ã§ããã°True',
        },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
  },
} as ComponentMeta<typeof BlogCard>

const Template: ComponentStory<typeof BlogCard> = (args) => (
  <BlogCard {...args} />
)

export const Default = Template.bind({})

Default.args = {
  image: 'https://source.unsplash.com/random',
  icon: icons.rabbit,
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=1%3A349',
  },
}

export const Loading = Template.bind({})

Loading.args = {
  loading: true,
}

Loading.parameters = {
  ...Default.parameters,
}

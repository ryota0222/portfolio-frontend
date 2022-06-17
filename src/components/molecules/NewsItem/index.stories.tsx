import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { NewsItem } from './'

export default {
  title: 'Design System/Atoms/NewsItem',
  component: NewsItem,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    isTop: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: '先頭のアイテムかどうか',
      table: {
        type: { summary: 'boolean', detail: '先頭のアイテムかどうか' },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
    isBottom: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: '最後のアイテムかどうか',
      table: {
        type: { summary: 'boolean', detail: '最後のアイテムかどうか' },
        defaultValue: { summary: false },
      },
      controls: { expanded: true },
    },
  },
} as ComponentMeta<typeof NewsItem>

const Template: ComponentStory<typeof NewsItem> = (args) => (
  <NewsItem {...args} />
)

export const Default = Template.bind({})

Default.args = {
  content: {
    id: 'id',
    date: '2022-05-04',
    text: 'sample',
    image: {
      url: '//source.unsplash.com/random',
      alt: '',
    },
  },
  isTop: true,
  isBottom: true,
  date: '2022/05/04',
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=4%3A244',
  },
}

export const NoDescription = Template.bind({})

NoDescription.args = {
  ...Default.args,
  content: {
    id: 'id',
    date: '2022-05-04',
    text: '',
    image: {
      url: '//source.unsplash.com/random',
      alt: '',
    },
  },
}

NoDescription.parameters = {
  ...Default.parameters,
}

export const NoImage = Template.bind({})

NoImage.args = {
  ...Default.args,
  content: {
    id: 'id',
    date: '2022-05-04',
    text: 'sample',
    image: '',
  },
}

NoImage.parameters = {
  ...Default.parameters,
}

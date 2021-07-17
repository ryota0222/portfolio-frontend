import { Story, Meta } from '@storybook/react'
import { FrameImage, Props } from '.'

export default {
  title: 'Design System/Atoms/FrameImage',
  component: FrameImage,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
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
    alt: {
      type: { name: 'string', required: false },
      defaultValue: 'sample',
      description: 'オルトテキスト',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sample' },
      },
      control: {
        type: 'text',
      },
    },
    imageWidth: {
      type: { name: 'string', required: false },
      defaultValue: '100px',
      description: '画像の幅',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100px' },
      },
      control: {
        type: 'text',
      },
    },
    imageHeight: {
      type: { name: 'string', required: false },
      defaultValue: '120px',
      description: '画像の高さ',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '120px' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as Meta

const Template: Story<Props> = (args) => <FrameImage {...args} />

export const Default = Template.bind({})

Default.args = {
  imageData:
    'https://images.ctfassets.net/6c3h1vzo5ct6/3rBIZHnfUXZQB5WAH3bUjU/0dd8f5c012efb124d2b645a086472902/until-release-portfolio-architecture.png',
  imageWidth: '120px',
  imageHeight: '120px',
  alt: '画像',
}

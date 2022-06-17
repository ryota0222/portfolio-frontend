import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { ExternalServiceLink } from '.'

export default {
  title: 'Design System/Atoms/ExternalServiceLink',
  component: ExternalServiceLink,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    type: {
      description: 'サービスタイプ',
      defaultValue: 'qiita',
      table: {
        type: { summary: 'ServiceType' },
        defaultValue: { summary: 'qiita' },
      },
      options: [
        'qiita',
        'twitter',
        'zenn',
        'github',
        'tsunagaru',
        'line-creators-market',
        'slide-share',
        'wcm',
      ],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ExternalServiceLink>

const Template: ComponentStory<typeof ExternalServiceLink> = (args) => (
  <ExternalServiceLink {...args}></ExternalServiceLink>
)

export const Default = Template.bind({})

Default.args = {
  type: 'qiita',
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Rs5TFRzZk9sjGkNuRSld9H/portfolio(v4)?node-id=20%3A318',
  },
}

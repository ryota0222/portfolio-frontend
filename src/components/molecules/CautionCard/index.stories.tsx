import { Story, Meta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { CautionCard, Props } from '.'

export default {
  title: 'Design System/Molecules/CautionCard',
  component: CautionCard,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {
    type: {
      type: { name: 'string', required: true },
      defaultValue: 'info',
      description: 'タイプ',
      options: ['info', 'warning', 'error'],
      table: {
        type: { summary: 'Cautiontype[]' },
        defaultValue: { summary: 'info' },
      },
      control: {
        type: 'select',
      },
    },
  },
} as Meta

const Template: Story<Props> = (args) => (
  <CautionCard {...args}>TestTestTestTestTestTestTestTestTest</CautionCard>
)

export const Info = Template.bind({})

Info.args = {
  type: 'info',
}

Info.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/uGEYjP7DYjxgOKjGiYbP5P/portfolio?node-id=814%3A1021',
  },
}

export const Warning = Template.bind({})

Warning.args = {
  type: 'warning',
}

Warning.parameters = {
  ...Info.parameters,
}

export const Error = Template.bind({})

Error.args = {
  type: 'error',
}

Error.parameters = {
  ...Info.parameters,
}

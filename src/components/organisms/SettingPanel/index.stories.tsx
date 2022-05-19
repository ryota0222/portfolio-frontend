import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SettingPanel } from '.'

export default {
  title: 'Design System/Organisms/SettingPanel',
  component: SettingPanel,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
  ],
  argTypes: {},
} as ComponentMeta<typeof SettingPanel>

const Template: ComponentStory<typeof SettingPanel> = () => <SettingPanel />

export const Default = Template.bind({})

Default.args = {}

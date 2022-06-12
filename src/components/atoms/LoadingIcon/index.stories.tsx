import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { LoadingIcon } from './LoadingIcon'

export default {
  title: 'Design System/Atoms/LoadingIcon',
  component: LoadingIcon,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {},
} as ComponentMeta<typeof LoadingIcon>

export const Template: ComponentStory<typeof LoadingIcon> = () => (
  <LoadingIcon />
)

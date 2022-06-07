import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { LoadingIconComponent } from './LoadingIcon'

export default {
  title: 'Design System/Atoms/LoadingIcon',
  component: LoadingIconComponent,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {},
} as ComponentMeta<typeof LoadingIconComponent>

export const Template: ComponentStory<typeof LoadingIconComponent> = () => (
  <LoadingIconComponent />
)

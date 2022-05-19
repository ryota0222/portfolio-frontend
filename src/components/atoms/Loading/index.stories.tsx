import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { Loading } from '.'

export default {
  title: 'Design System/Atoms/Loading',
  component: Loading,
  decorators: [
    (story: any) => <div style={{ padding: '0 2rem' }}>{story()}</div>,
    withDesign,
  ],
  argTypes: {},
} as ComponentMeta<typeof Loading>

export const Template: ComponentStory<typeof Loading> = () => <Loading />

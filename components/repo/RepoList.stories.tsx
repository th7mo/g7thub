import type { Meta, StoryObj } from '@storybook/react'

import RepoList from './List'

const meta: Meta<typeof RepoList> = {
  component: RepoList,
}

export default meta
type Story = StoryObj<typeof RepoList>

export const Primary: Story = {
  render: () => <RepoList username="th7mo" />,
}

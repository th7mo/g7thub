import type { Meta, StoryObj } from '@storybook/react'

import RepoTopicList from './TopicList'

const meta: Meta<typeof RepoTopicList> = {
  component: RepoTopicList,
}

export default meta
type Story = StoryObj<typeof RepoTopicList>

export const Primary: Story = {
  render: () => <RepoTopicList topics={['java', 'springboot', 'mvc']} />,
}

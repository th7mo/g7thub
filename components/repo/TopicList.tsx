import RepoTopicLabel from './TopicLabel'

interface Props {
  topics: string[]
}

const RepoTopicList: React.FC<Props> = ({ topics }) => {
  return (
    <li>
      <ul className="flex gap-1 flex-wrap">
        {topics.map((topic) => (
          <li key={topic}>
            <RepoTopicLabel text={topic} />
          </li>
        ))}
      </ul>
    </li>
  )
}

export default RepoTopicList

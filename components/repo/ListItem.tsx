import { Repo } from './Repo'
import RepoTopicLabel from './TopicLabel'

interface Props {
  repo: Repo
}

const RepoListItem: React.FC<Props> = ({ repo }) => {
  return (
    <li className="border-t-[0.5px] border-gray-100/10 py-3 grid gap-2">
      <h2 className="text-lg text-blue-400">{repo.name}</h2>
      <p className="text-sm">{repo.description}</p>
      <ul className="flex gap-1 flex-wrap">
        {repo.topics?.map((topic) => (
          <li>
            <RepoTopicLabel text={topic} />
          </li>
        ))}
      </ul>
    </li>
  )
}

export default RepoListItem

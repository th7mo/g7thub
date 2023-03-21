import { Repo } from './Repo'
import RepoTopicLabel from './TopicLabel'
import RepoTopicList from './TopicList'
import RepoUpdateDate from './UpdateDate'
import RepoVisiblityLabel from './VisibilityLabel'

interface Props {
  repo: Repo
}

const RepoListItem: React.FC<Props> = ({ repo }) => {
  return (
    <li className="border-t-[0.5px] dark:border-gray-100/10 py-3">
      <ul className="flex flex-col gap-2">
        <li className="flex gap-2 items-center">
          <h2 className="text-lg text-blue-400 pb-0.5">{repo.name}</h2>
          <RepoVisiblityLabel isPrivate={repo.private} />
        </li>

        {repo.description ? (
          <li>
            <p className="text-sm">{repo.description}</p>
          </li>
        ) : null}

        {repo.topics?.length ? <RepoTopicList topics={repo.topics} /> : null}

        <ul className="text-3sm flex justify-between text-gray-500">
          <li>
            <p>{repo.language}</p>
          </li>
          {repo.updated_at ? (
            <li>
              <p className="italic">
                Updated at <RepoUpdateDate date={repo.updated_at} />
              </p>
            </li>
          ) : null}
        </ul>
      </ul>
    </li>
  )
}

export default RepoListItem

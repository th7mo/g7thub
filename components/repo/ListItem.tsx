import { Repo } from './Repo'

interface Props {
  repo: Repo
}

const RepoListItem: React.FC<Props> = ({ repo }) => {
  return (
    <li>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
    </li>
  )
}

export default RepoListItem

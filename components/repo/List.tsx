import { useEffect, useState } from 'react'
import RepoListItem from './ListItem'
import RepoListItemSkeleton from './ListItemSkeleton'
import { Repo } from './Repo'
import { getUserRepos } from './RepoService'

interface Props {
  username: string
}

const RepoList: React.FC<Props> = ({ username }) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getUserRepos(username).then((fetchedRepos) => {
      setRepos(fetchedRepos)
      setLoading(false)
    })
  }, [])

  if (!repos || isLoading) {
    return (
      <ul>
        <RepoListItemSkeleton />
        <RepoListItemSkeleton />
        <RepoListItemSkeleton />
      </ul>
    )
  }

  return (
    <ul>
      {repos.map((repo: Repo) => (
        <RepoListItem repo={repo} key={repo.id} />
      ))}
    </ul>
  )
}

export default RepoList

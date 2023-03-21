import RepoList from '@/components/repo/List'
import Header from '@/components/shared/Header'

const ReposPage = () => {
  return (
    <>
      <Header name="Repositories" />
      <RepoList username="th7mo" />
    </>
  )
}

export default ReposPage

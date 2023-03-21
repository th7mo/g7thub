import RepoList from '@/components/repo/List'
import Header from '@/components/shared/Header'

const ReposPage = () => {
  return (
    <main className="m-4 flex flex-col gap-4">
      <Header name="Repositories" />
      <RepoList username="abcdan" />
    </main>
  )
}

export default ReposPage

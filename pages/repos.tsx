import RepoList from '@/components/repo/List'
import Header from '@/components/shared/Header'
import Head from 'next/head'

const user = 'abcdan'

const ReposPage = () => {
  return (
    <>
      <Head>
        <title>{user}/repos</title>
      </Head>
      <main className="m-4 flex flex-col gap-4">
        <Header name="Repositories" />
        <RepoList username={user} />
      </main>
    </>
  )
}

export default ReposPage

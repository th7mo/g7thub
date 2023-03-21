import RepoList from '@/components/repo/List'
import Header from '@/components/shared/Header'
import UserProfilePicture from '@/components/user/ProfilePicture'
import { User } from '@/components/user/User'
import { getUser } from '@/components/user/UserService'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ReposPage = () => {
  const [user, setUser] = useState<User>()
  const [isLoading, setLoading] = useState(true)
  const router = useRouter()
  const { userid } = router.query

  useEffect(() => {
    if (!userid || typeof userid !== 'string') {
      return
    }

    getUser(userid).then((fetchedUser) => {
      setUser(fetchedUser)
      setLoading(false)
    })
  }, [userid])

  if (isLoading || !user) return <Header name="Loading Repositories"></Header>

  return (
    <>
      <Head>
        <title>{userid}/repos</title>
      </Head>
      <main className="m-4 flex flex-col gap-4">
        <header className="flex items-center gap-4">
          <Link href={`/${user.login}`}>
            <UserProfilePicture src={user.avatar_url} size="small" />
          </Link>

          <div>
            <Header name="Repositories" />
            <p className="text-gray-500">@{user.login}</p>
          </div>
        </header>

        <RepoList username={user.login} />
      </main>
    </>
  )
}

export default ReposPage

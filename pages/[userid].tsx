import UserProfile from '@/components/user/Profile'
import { User } from '@/components/user/User'
import { getUser } from '@/components/user/UserService'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const UserPage = () => {
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

  if (isLoading) return <p>Loading User...</p>
  if (!user) {
    return <p>Something went wrong while fetching user</p>
  }

  return (
    <>
      <Head>
        <title>g7thub</title>
        <meta
          name="description"
          content="A Github clone using the Github API"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-4">
        <UserProfile user={user} />
      </main>
    </>
  )
}

export default UserPage

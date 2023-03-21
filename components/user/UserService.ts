import { Octokit } from 'octokit'
import { User } from './User'

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
})

export async function getUser(username: string): Promise<User> {
  let user: User
  const response = await octokit.request('GET /users/{username}', {
    username,
    sort: 'updated',
  })
  user = { ...response.data }

  console.log(user)

  return user
}

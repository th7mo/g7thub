import { Octokit } from 'octokit'
import { Repo } from './Repo'

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
})

export async function getUserRepos(username: string): Promise<Repo[]> {
  const repos: Repo[] = []
  const response = await octokit.request('GET /users/{username}/repos', {
    username,
  })
  for (const repo of response.data) {
    repos.push({ ...repo })
  }
  return repos
}

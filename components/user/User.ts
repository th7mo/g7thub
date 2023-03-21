export interface User {
  login: string
  avatar_url: string
  email: string | null
  bio: string | null
  name: string | null
  followers: number
  following: number
  public_repos: number
}

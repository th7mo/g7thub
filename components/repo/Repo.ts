export interface Repo {
  id: number
  name: string
  private: boolean
  description: string | null
  topics?: string[]
  visibility?: string
}

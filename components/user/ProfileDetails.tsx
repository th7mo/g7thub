import { User } from './User'

interface Props {
  user: User
}

const UserProfileDetails: React.FC<Props> = ({ user }) => {
  return (
    <ul className="grid grid-cols-3 gap-4 text-lg">
      <li className="flex flex-col items-center">
        <p>{user.public_repos}</p>
        <p className="text-sm">repos</p>
      </li>
      <li className="flex flex-col items-center">
        <p>{user.following}</p>
        <p className="text-sm">following</p>
      </li>
      <li className="flex flex-col items-center">
        <p>{user.followers}</p>
        <p className="text-sm">followers</p>
      </li>
    </ul>
  )
}

export default UserProfileDetails

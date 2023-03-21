import Header from '../shared/Header'
import UserProfileDetails from './ProfileDetails'
import UserProfilePicture from './ProfilePicture'
import { User } from './User'

interface Props {
  user: User
}

const UserProfile: React.FC<Props> = ({ user }) => {
  return (
    <ul className="flex flex-col gap-4">
      <li className="flex gap-5 items-center">
        <UserProfilePicture src={user.avatar_url} />
        <UserProfileDetails user={user} />
      </li>

      <li>
        {user.name ? (
          <div className="leading-none">
            <Header name={user.name} />
            <p className="text-gray-500">@{user.login}</p>
          </div>
        ) : (
          <Header name={user.login} />
        )}
      </li>
      <li className="text-sm">
        <p>{user.bio}</p>
      </li>
    </ul>
  )
}

export default UserProfile

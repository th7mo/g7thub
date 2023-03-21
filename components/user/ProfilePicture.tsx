interface Props {
  src: string
  size?: string
}

const UserProfilePicture: React.FC<Props> = ({ src, size }) => {
  return (
    <img
      src={src}
      alt="Profile Picture"
      className={`rounded-full ${
        size === 'small' ? 'max-w-12 max-h-12' : 'max-w-20 max-h-20'
      }`}
    />
  )
}

export default UserProfilePicture

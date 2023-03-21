interface Props {
  src: string
}

const UserProfilePicture: React.FC<Props> = ({ src }) => {
  return (
    <img
      src={src}
      alt="Profile Picture"
      className="rounded-full max-w-20 max-h-20"
    />
  )
}

export default UserProfilePicture

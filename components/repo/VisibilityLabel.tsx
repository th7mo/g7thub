interface Props {
  isPrivate: boolean
  className?: string
}

const RepoVisiblityLabel: React.FC<Props> = ({ isPrivate, className }) => {
  return (
    <p
      className={`text-2sm rounded-full dark:border-gray-500 border-[0.5px] px-2 dark:text-gray-500 border-black max-w-fit ${className}`}
    >
      {isPrivate ? 'Private' : 'Public'}
    </p>
  )
}

export default RepoVisiblityLabel

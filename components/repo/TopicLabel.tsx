interface Props {
  text: string
}

const RepoTopicLabel: React.FC<Props> = ({ text }) => {
  return (
    <p className="text-blue-400 text-2sm rounded-full bg-blue-400/20 max-w-fit px-2 leading-none py-1">
      {'#' + text}
    </p>
  )
}

export default RepoTopicLabel

interface Props {
  className: string
}

const Skeleton: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`animate-pulse rounded-full bg-zinc-700 ${className}`}
    ></div>
  )
}

export default Skeleton

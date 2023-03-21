import Skeleton from '../core/Skeleton'

const RepoHeaderSkeleton = () => {
  return (
    <ul className="flex gap-4 items-center h-[60px]">
      <Skeleton className="w-12 h-12" />
      <li className="flex flex-col gap-2">
        <Skeleton className="w-48 h-[26px]" />
        <Skeleton className="w-32 h-[20px]" />
      </li>
    </ul>
  )
}

export default RepoHeaderSkeleton

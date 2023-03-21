import Skeleton from '../core/Skeleton'

const RepoListItemSkeleton = () => {
  return (
    <ul className="border-t-[0.5px] dark:border-gray-100/10 py-3 flex gap-2 flex-col">
      <li className="flex gap-4 mb-3">
        <Skeleton className="w-28 h-[24px]" />
        <Skeleton className="w-20 h-[24px]" />
      </li>

      <li>
        <Skeleton className="w-[80%] h-[15px]" />
      </li>
      <li>
        <Skeleton className="w-[90%] h-[15px]" />
      </li>
      <li>
        <Skeleton className="w-[60%] h-[15px] mb-2" />
      </li>

      <li className="flex gap-2 flex-wrap">
        <Skeleton className="w-16 h-[20px]" />
        <Skeleton className="w-20 h-[20px]" />
        <Skeleton className="w-12 h-[20px]" />
      </li>
    </ul>
  )
}

export default RepoListItemSkeleton

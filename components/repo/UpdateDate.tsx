interface Props {
  date: string
}

function getDateAsYearMonthDay(rawDate: string): string {
  return rawDate.slice(0, 10)
}

const RepoUpdateDate: React.FC<Props> = ({ date }) => {
  return <span>{getDateAsYearMonthDay(date)}</span>
}

export default RepoUpdateDate

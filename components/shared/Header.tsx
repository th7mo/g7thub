interface Props {
  name: string
}

const Header: React.FC<Props> = ({ name }) => {
  return <h1 className="text-3xl font-semibold">{name}</h1>
}

export default Header

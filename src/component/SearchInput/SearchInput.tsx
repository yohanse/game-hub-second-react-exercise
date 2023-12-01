import { Input } from "@chakra-ui/react"

interface Props{
    onSearch: (serachValue: string) => void;
}

export const SearchInput = ({onSearch}: Props) => {
  return (
    <Input borderRadius={50} placeholder="Search Games ..." variant="filled" onChange={(value) => onSearch(value.target.value)}></Input>
  )
}

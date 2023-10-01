import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}
const Metacritic = ({ metacritic }: Props) => {
  const color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {metacritic}
    </Badge>
  );
};

export default Metacritic;

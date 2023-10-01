import { Game } from "../../hooks/useGame";
import { Card, Image, CardBody, Heading, Text } from "@chakra-ui/react";
import PlatFormIconList from "../platformIconList/PlatFormIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatFormIconList platforms={game.platforms.map(p => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;

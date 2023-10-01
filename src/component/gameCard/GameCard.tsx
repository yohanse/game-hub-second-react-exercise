import { Game } from "../../hooks/useGame";
import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import PlatFormIconList from "../platformIconList/PlatFormIconList";
import Metacritic from "../Metacritic/Metacritic";
import getCroppedImage from "../../service/image-url";


interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card width="250px" borderRadius="10px" overflow="hidden">
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatFormIconList platforms={game.platforms.map((p) => p.platform)} />
          <Metacritic metacritic={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

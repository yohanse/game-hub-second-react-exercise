import { SimpleGrid } from "@chakra-ui/layout";
import useGame from "../../hooks/useGame";
import GameCard from "../gameCard/GameCard";

const GridGame = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <>{error}</>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} padding="10px">
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GridGame;

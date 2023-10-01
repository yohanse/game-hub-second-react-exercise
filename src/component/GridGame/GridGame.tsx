import { SimpleGrid } from "@chakra-ui/layout";
import useGame from "../../hooks/useGame";
import GameCard from "../gameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";

const GridGame = () => {
  const { games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <>{error}</>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GridGame;

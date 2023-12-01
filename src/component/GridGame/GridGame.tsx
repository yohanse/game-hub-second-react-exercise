import { SimpleGrid } from "@chakra-ui/layout";
import useGame, { PlatForm } from "../../hooks/useGame";
import GameCard from "../gameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import { Genres } from "../../hooks/useGenres";

interface Props {
  genres: Genres | null;
  platform: PlatForm | null;
  order: string;
  search: string;
}

const GridGame = ({ genres, platform, order, search}: Props) => {
  const { data, error, isLoading } = useGame(genres, platform, order, search);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <>{error}</>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {
          data !== null? data.map((game) => (
            <GameCard game={game} key={game.id}></GameCard>
          )): <>no result</>
        }
      </SimpleGrid>
    </>
  );
};

export default GridGame;

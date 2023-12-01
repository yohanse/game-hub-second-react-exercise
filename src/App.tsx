import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar/NavBar";
import GridGame from "./component/GridGame/GridGame";
import AsideGenres from "./component/AsideGenres/AsideGenres";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import { PlatformSelector } from "./component/PlatformSelector/PlatformSelector";
import { PlatForm } from "./hooks/useGame";
import { SortSelector } from "./component/SortSelector/SortSelector";


interface GameQuery{
  genres: Genres | null;
  platform: PlatForm | null;
  order: string;
  search: string;
}


function App() {
  const [gameQuery, SetGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(search: string) => SetGameQuery({...gameQuery, search: search})}/>
        
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <AsideGenres
            onSelectedGenres={(genre) => SetGameQuery({...gameQuery, genres: genre})}
            selectedGenres={gameQuery.genres}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} marginBottom={5}>
        <PlatformSelector
          onSelectedPlatform={(platform) => SetGameQuery({...gameQuery, platform: platform})}
          selectedPlatform={gameQuery.platform}
        />
        <SortSelector onSelectedSortOrder= {(order) => SetGameQuery({...gameQuery, order: order})}></SortSelector>
        </HStack>
        <GridGame genres={gameQuery.genres} platform={gameQuery.platform} order={gameQuery.order} search={gameQuery.search}/>
      </GridItem>
    </Grid>
  );
}
export default App;

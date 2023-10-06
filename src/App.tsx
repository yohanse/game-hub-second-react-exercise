import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar/NavBar";
import GridGame from "./component/GridGame/GridGame";
import AsideGenres from "./component/AsideGenres/AsideGenres";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }}
    >
      <GridItem area="nav" ><NavBar/></GridItem>
      <Show above="lg">
        <GridItem area="aside"><AsideGenres/></GridItem>
      </Show>
      <GridItem area="main"><GridGame/></GridItem>
    </Grid>
  );
}
export default App;

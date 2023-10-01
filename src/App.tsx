import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar/NavBar";
import GridGame from "./component/GridGame/GridGame";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" ><NavBar/></GridItem>
      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>
      <GridItem area="main"><GridGame/></GridItem>
    </Grid>
  );
}
export default App;

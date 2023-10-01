import useGame from "../../hooks/useGame";

const GridGame = () => {
  
  const {games, error} = useGame();
  return (
    <>
      {error && <>{error}</>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GridGame;

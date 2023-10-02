import useData from "./useData";

interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  platforms: { platform: PlatForm }[];
}
const useGame = () => useData<Game>("/games");

export default useGame;
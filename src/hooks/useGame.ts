import useData from "./useData";

export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  platforms: { platform: PlatForm }[];
}
const useGame = () => useData<Game>("/games");

export default useGame;
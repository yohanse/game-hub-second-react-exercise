import useData from "./useData";
import { Genres } from "./useGenres";

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
const useGame = (genres: Genres | null, platform: PlatForm | null, order: string) =>
  useData<Game>("/games", [genres, platform, order], { params: { genres: genres?.id, platforms: platform?.id, ordering: order} });

export default useGame;

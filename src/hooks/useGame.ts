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
const useGame = (
  genres: Genres | null,
  platform: PlatForm | null,
  order: string,
  search: string
) => {
  return useData<Game>("/games", [genres, platform, order, search], {
    params: {
      genres: genres?.id,
      platforms: platform?.id,
      ordering: order,
      search: search,
    },
  });
};

export default useGame;

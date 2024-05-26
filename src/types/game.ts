import Platform from "./platform";

export default interface Game {
  id: number;
  slug: string;
  name: string;
  description: string;
  website: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

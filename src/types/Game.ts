import { Platform } from './Platform';
import { Publisher } from './Publisher';

export interface Game {
  id: number;
  slug: string;
  name: string;
  description: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  publishers: Publisher[];
  metacritic: number;
  rating_top: number;
}

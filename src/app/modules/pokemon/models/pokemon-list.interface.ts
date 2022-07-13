import { PokemonListItem } from "./pokemon-list-item.interface";

export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: PokemonListItem[];
}

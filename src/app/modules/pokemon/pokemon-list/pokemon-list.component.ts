import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonList, PokemonListItem } from '../models';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  @Input() pokemonList!: PokemonList | null;
  @Output() emitSelectedPokemon: EventEmitter<PokemonListItem> = new EventEmitter();

  selectedPokemon: any;

  constructor() { }

  pokemonSelected(pokemon: PokemonListItem): void {
    this.selectedPokemon = pokemon;
    console.log(pokemon);
    this.emitSelectedPokemon.emit(pokemon);
  }

}

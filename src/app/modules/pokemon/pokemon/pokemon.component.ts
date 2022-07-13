import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail, PokemonList, PokemonListItem } from '../models';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  // app-pokemon-detail

  selectedPokemon$: Observable<any> | undefined;
  pokemonList$!: Observable<PokemonList>;

  pokemonTeamMember: PokemonDetail | null = {
    id: '1',
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    type: 'grass/poison',
    height: 0,
    weight: 0
  }

  // inject our services
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // call out to a service that calls out to the api and fetches a value
    this.pokemonList$ = this.pokemonService.getPokemonList();
  }

  requestPokemonDetail(pokemonListItem: PokemonListItem): void {
    // take the url
    // console.log(pokemonListItem)
    this.selectedPokemon$ = this.pokemonService.getPokemonDetail(pokemonListItem.url);
    // make a call to the url using the srvice
    // get resp back as obs
    // pass that to detail using prop binding and the async pip
  }

}



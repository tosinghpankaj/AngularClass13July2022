import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { PokemonDetail, PokemonList } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly rootUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private httpClient: HttpClient) { }

  getPokemonList(): Observable<PokemonList> {
    return this.httpClient.get<PokemonList>(`${this.rootUrl}pokemon/?limit=251`);
  }

  getPokemonDetail(url: string): Observable<PokemonDetail> {
    return this.httpClient.get<any>(url).pipe(
      tap((pokemon: any) => console.log(pokemon)),
      map((pokemon: any) => {
        const { id, name, weight, height } = pokemon;
        const type = pokemon.types.map((type: any) => type.type.name).join('/');
        const image = pokemon.sprites.front_default;

        return {
          id,
          name,
          weight,
          height,
          type,
          image
        }
      })
    )
  }
}

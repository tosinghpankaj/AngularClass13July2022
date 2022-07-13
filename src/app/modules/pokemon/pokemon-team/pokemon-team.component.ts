import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-team',
  templateUrl: './pokemon-team.component.html',
  styleUrls: ['./pokemon-team.component.css']
})
export class PokemonTeamComponent implements OnInit {

  @Input() currentPokemonTeam: any | undefined = [];

  constructor() { }

  ngOnInit(): void {
  }

}

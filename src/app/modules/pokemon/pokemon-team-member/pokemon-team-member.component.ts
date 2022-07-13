import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-team-member',
  templateUrl: './pokemon-team-member.component.html',
  styleUrls: ['./pokemon-team-member.component.css']
})
export class PokemonTeamMemberComponent implements OnInit {

  @Input() pokemonTeamMember: any | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

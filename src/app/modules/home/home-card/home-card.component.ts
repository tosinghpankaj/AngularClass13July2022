import { Component, Input, OnInit } from '@angular/core';
import { lorem30 } from '../utils/text';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {


  // x add a ToH component
  // x add an exp component
  // x add an pkmn component
  // add routing at the root
  // make homeCards clickable and route
  // do lazy loading

  // 3 members (string)
  // holds title
  @Input() title: string = 'Feature';
  // holds icon
  @Input() icon: string = 'science';
  // description
  @Input() description: string = lorem30;

  constructor() { }

  ngOnInit(): void {
  }

}

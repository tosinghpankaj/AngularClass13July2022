import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeCardData } from '../models/';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  homeCardsData: HomeCardData[] = [
    {
      title: 'Pokemon',
      icon: 'catching_pokemon'
    },
    {
      title: 'Tour of Heroes',
      icon: 'bolt'
    },
    {
      title: 'Experiment',
    },
  ]

  constructor(private router: Router) { }

  navigate(route: string): void {
    switch (route) {
      case 'Pokemon':
        this.router.navigate(['pokemon'])
        break;
      case 'Tour of Heroes':
        this.router.navigate(['tour-of-heroes'])
        break
      default:
        this.router.navigate(['experiment', 'lab'])
        break;
    }
  }

}

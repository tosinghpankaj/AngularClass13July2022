import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'pokemon',
        loadChildren: () => import('./modules/pokemon/pokemon.module').then(m => m.PokemonModule)
      },
      {
        path: 'tour-of-heroes',
        loadChildren: () => import('./modules/tour-of-heros/tour-of-heros.module').then(m => m.TourOfHerosModule)
      },
      {
        path: 'experiment/lab',
        loadChildren: () => import('./modules/experiment/experiment.module').then(m => m.ExperimentModule)
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

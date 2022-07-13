import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const tourOfHerosRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(tourOfHerosRoutes)],
  exports: [RouterModule]
})
export class TourOfHerosRoutingModule { }

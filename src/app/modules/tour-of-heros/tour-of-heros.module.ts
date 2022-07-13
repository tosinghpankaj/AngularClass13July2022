import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { TourOfHerosRoutingModule } from './tour-of-heros-routing.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    TourOfHerosRoutingModule
  ]
})
export class TourOfHerosModule { }

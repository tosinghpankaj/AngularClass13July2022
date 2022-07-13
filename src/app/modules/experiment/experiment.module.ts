import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabComponent } from './lab/lab.component';
import { RouterModule, Routes } from '@angular/router';

export const experimentRoutes: Routes = [
  {
    path: '',
    component: LabComponent,
  }
]

@NgModule({
  declarations: [
    LabComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(experimentRoutes)
  ]
})
export class ExperimentModule { }

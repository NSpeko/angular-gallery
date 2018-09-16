import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OutfitDetailsComponent} from './outfit-details/outfit-details.component';

const routes: Routes = [
  {
    path: ':group/:id',
    component: OutfitDetailsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutfitRoutingModule { }

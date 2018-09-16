import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GalleryListComponent} from './gallery-list/gallery-list.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryListComponent,
    data: {
      title: 'Gallery'
    }
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
export class GalleryRoutingModule {
}

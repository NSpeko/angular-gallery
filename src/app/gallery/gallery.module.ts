import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { OptionsComponent } from './gallery-list/options/options.component';
import { ContainerComponent } from './gallery-list/container/container.component';
import {SlickModule} from 'ngx-slick';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SlickModule.forRoot()
  ],
  declarations: [GalleryListComponent, OptionsComponent, ContainerComponent]
})
export class GalleryModule { }

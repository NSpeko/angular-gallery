import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutfitRoutingModule } from './outfit-routing.module';
import { OutfitDetailsComponent } from './outfit-details/outfit-details.component';

@NgModule({
  imports: [
    CommonModule,
    OutfitRoutingModule
  ],
  declarations: [OutfitDetailsComponent]
})
export class OutfitModule { }

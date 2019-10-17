import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacelistPage } from './placelist';

@NgModule({
  declarations: [
    PlacelistPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacelistPage),
  ],
})
export class PlacelistPageModule {}

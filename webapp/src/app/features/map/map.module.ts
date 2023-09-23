import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MapComponent}
    ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MapModule { }

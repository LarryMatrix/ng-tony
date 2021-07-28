import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialComponentsModule} from './material-components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports: [
    MaterialComponentsModule
  ],
})
export class SharedModule { }

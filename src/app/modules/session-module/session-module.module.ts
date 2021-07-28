import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import {SessionRoutingModule} from './session-routing.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    CommonModule,
    SessionRoutingModule
  ]
})
export class SessionModuleModule { }

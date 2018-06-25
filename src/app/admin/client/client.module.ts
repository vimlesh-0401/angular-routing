import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [LoginComponent]
})
export class ClientModule { }

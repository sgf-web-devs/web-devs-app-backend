import { NgModule } from '@angular/core';
import { AdminRoutingModule, routingComponents } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    routingComponents
  ]
})
export class AdminModule { }

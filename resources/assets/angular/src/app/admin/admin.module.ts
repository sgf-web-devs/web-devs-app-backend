import { NgModule } from '@angular/core';
import { AdminRoutingModule, routingComponents } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatCardModule, } from '@angular/material';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  declarations: [
    routingComponents
  ]
})
export class AdminModule { }

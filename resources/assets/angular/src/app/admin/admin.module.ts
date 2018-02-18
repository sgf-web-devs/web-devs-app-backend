import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';

import { AdminRoutingModule, routingComponents } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    LayoutModule
  ],
  declarations: [
    routingComponents
  ]
})
export class AdminModule { }

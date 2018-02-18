import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatTableModule,
  MatCheckboxModule,
  MatSortModule,
} from '@angular/material';

import { AdminRoutingModule, adminRoutingComponents } from './admin-routing.module';
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
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    LayoutModule
  ],
  declarations: [
    adminRoutingComponents
  ]
})
export class AdminModule { }

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
import { InlineEditComponent } from './components/inline-edit/inline-edit.component';


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
    adminRoutingComponents,
    InlineEditComponent
  ]
})
export class AdminModule { }

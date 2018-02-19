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
  MatDialogModule,
} from '@angular/material';

import { AdminRoutingModule, adminRoutingComponents } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InlineEditComponent } from './components/inline-edit/inline-edit.component';
import { NewPrizeComponent } from './components/new-prize/new-prize.component';


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
    MatDialogModule,
    LayoutModule
  ],
  declarations: [
    adminRoutingComponents,
    InlineEditComponent,
    NewPrizeComponent
  ],
  entryComponents: [
    NewPrizeComponent
  ]
})
export class AdminModule { }

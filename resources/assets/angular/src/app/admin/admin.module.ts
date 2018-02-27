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
  MatTooltipModule,
} from '@angular/material';

import { AdminRoutingModule, adminRoutingComponents } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InlineEditComponent } from './components/inline-edit/inline-edit.component';
import { NewPrizeComponent } from './components/new-prize/new-prize.component';
import { PrizesService } from './providers/prizes.service';
import { AuthService } from './providers/auth.service';


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
    MatTooltipModule,
    LayoutModule
  ],
  declarations: [
    adminRoutingComponents,
    InlineEditComponent,
    NewPrizeComponent
  ],
  entryComponents: [
    NewPrizeComponent
  ],
  providers: [PrizesService, AuthService]
})
export class AdminModule { }

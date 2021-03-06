import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { AttendeeService } from './providers/attendee/attendee.service';

@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  providers: [AttendeeService]
})
export class AppModule { }

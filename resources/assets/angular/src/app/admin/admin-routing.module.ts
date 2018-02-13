import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RaffleComponent } from './pages/raffle/raffle.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AdminComponent, children: [
      { path: 'raffle', component: RaffleComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AdminRoutingModule { }

export const routingComponents = [ LoginComponent, RaffleComponent, AdminComponent ];

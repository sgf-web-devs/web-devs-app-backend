import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { RaffleComponent } from './pages/raffle/raffle.component';
import { PrizesComponent } from './pages/prizes/prizes.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AdminComponent, children: [
      { path: 'raffle', component: RaffleComponent },
      { path: 'prizes', component: PrizesComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routingComponents = [ LoginComponent, RaffleComponent, AdminComponent, PrizesComponent ];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { LoginComponent } from './pages/login/login.component';
import { RaffleComponent } from './pages/raffle/raffle.component';
import { PrizesComponent } from './pages/prizes/prizes.component';
import { AuthService } from './providers/auth.service';
import { AuthGuardService } from './providers/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AdminNavComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'raffle', component: RaffleComponent },
      { path: 'prizes', component: PrizesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AdminRoutingModule { }

export const adminRoutingComponents = [ LoginComponent, RaffleComponent, AdminNavComponent, PrizesComponent ];

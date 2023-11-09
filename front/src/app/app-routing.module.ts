import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AfficherreclamationComponent } from './afficherreclamation/afficherreclamation.component';
import { AfficherreservationComponent } from './afficherreservation/afficherreservation.component';
import { AjoutereventComponent } from './ajouterevent/ajouterevent.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { Reclamation } from './models/reclamation';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { session: '0' },
  },
  {
    path: 'client',
    component: AjoutereventComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent, canActivate: [AuthGuard] },
  {
    path: 'reservation/:id',
    component: ReservationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'afficherreservation',
    component: AfficherreservationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'afficherreclamation',
    component: AfficherreclamationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'reclamation',
    component: ReclamationComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

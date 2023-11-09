import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AjoutereventComponent } from './ajouterevent/ajouterevent.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { AfficherreservationComponent } from './afficherreservation/afficherreservation.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AfficherreclamationComponent } from './afficherreclamation/afficherreclamation.component';
import { AuthGuard } from './auth.guard';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    LoginComponent,
    SigninComponent,
    ReservationComponent,
    AjoutereventComponent,
    AdminComponent,
    AfficherreservationComponent,
    ReclamationComponent,
    AfficherreclamationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserModule,
    // MatDialogModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}

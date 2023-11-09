import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Event } from '../models/Event';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';
import { Reclamation } from '../models/reclamation';

const endpoint: string = 'http://localhost:8000';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getevents() {
    return this.http.get<any>(endpoint + '/afficherevent');
  }
  getAllreservation() {
    return this.http.get<any>(endpoint + '/afficherreservation');
  }
  getEventsByStatus(etat: any) {
    return this.http.get<any>(endpoint + `/getEventsByStatus=${etat}`);
  }
  ajouterevent(event: any): Observable<void> {
    console.log(event);

    const url = '/api/Ajoutevent';
    return this.http.post<void>('http://127.0.0.1:8000' + url, event);
  }
  supprimerevent(id: any) {
    return this.http.delete<any>(endpoint + `/supprimerevent=${id}`);
  }

  /** Update Event status */
  updateEventStatus(event: any) {
    const url = `/updateevent?id=${event.id}&etat=1`;
    return this.http.get(endpoint + url);
  }
  updateEventStatu(event: any) {
    const url = `/updateevent?id=${event.id}&etat=0`;
    return this.http.get(endpoint + url);
  }

  /**reservation normalmnt */
  ajoutreservation(reservation: Reservation) {
    const url = `/Ajoutreservation?nom=${reservation.nom}&idevent=${reservation.idevent}&nbre_personne=${reservation.nbre_personne}&telephone=${reservation.telephone}`;
    return this.http.get(endpoint + url);
  }

  ajoutreclamation(reclamation: Reclamation) {
    const url = `/Ajoutreclamation?nom=${reclamation.nom}&prenom=${reclamation.prenom}&message=${reclamation.message}&sujet=${reclamation.sujet}`;
    return this.http.get(endpoint + url);
  }

  getAllreclamation() {
    return this.http.get<any>(endpoint + '/afficherreclamation');
  }

  supprimerreclamation(reclamation: any) {
    return this.http.get<any>(
      endpoint + `/supprimerreclamation?id=${reclamation}`
    );
  }
  // a fixer
  geteventbyidclient(id: any) {
    return this.http.get(endpoint + '/showEvents' + id);
  }
}

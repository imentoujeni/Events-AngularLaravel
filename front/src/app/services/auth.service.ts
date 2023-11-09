import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.get<any>(
      `${this.endpoint}/Authentification?email=${user.email}&mdp=${user.mdp}`
    );
  }

  signUpclient(user: User): Observable<any> {
    return this.http
      .get<any>(`${this.endpoint}/ajoutClient?nom=${user.nom}&prenom=${user.prenom}&adresse=${user.adresse}
      &date_naisance=${user.dateDeNaissance}&email=${user.email}&mdp=${user.mdp}`);
  }

  IsLoggedIn() {
    return localStorage.getItem('connectedUser');
  }
}

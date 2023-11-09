import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Event } from '../models/Event';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  listeevents: any = [];

  public lettre: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.getAllevents();
    this.afficher_events_etat_un();
  }
  page: any = 1;
  onTableDataChange(event: any) {
    this.page = event;
  }
  getAllevents() {
    this.api.getevents().subscribe((res) => {
      this.listeevents = res;

      console.log(res);
    });
  }
  afficher_events_etat_un() {
    this.api.getevents().subscribe((res) => {
      this.listeevents = res.filter(
        (event: { etat: string }) => event.etat === '1'
      );
      console.log(this.listeevents);
    });
  }

  searchEventsByLetter(letter: string) {
    this.api.getevents().subscribe((response: any) => {
      // Filtrer les événements en fonction de la lettre saisie
      this.listeevents = response.filter((event: any) => {
        return event.nom.toLowerCase().includes(letter.toLowerCase());
      });
    });
  }
}

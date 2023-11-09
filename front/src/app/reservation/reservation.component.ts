import { Component } from '@angular/core';
import { Event } from '../models/Event';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Reservation } from '../models/reservation';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent {
  id: any;
  listeevents: any[] = [];
  evenement: any;
  reservation: Reservation = new Reservation();
  nbre_personne: string = '';
  telephone: string = '';
  idevent: string = '';
  nom: string = '';

  constructor(
    private ar: ActivatedRoute,
    private api: ApiService,
    private route: Router
  ) {}

  ngOnInit() {
    this.ar.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      console.log(this.id);
      this.evenement = this.listeevents.find((item) => item.id === this.id);
    });
    this.nom = '';
    this.idevent = '';
    this.nbre_personne = '';
    this.telephone = '';
  }
  //ajoutreservation
  valider() {
    this.reservation.nom = this.nom;
    this.reservation.idevent = this.id;
    this.reservation.nbre_personne = this.nbre_personne;
    this.reservation.telephone = this.telephone;

    console.log(this.reservation);

    this.api.ajoutreservation(this.reservation).subscribe({
      next: () => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: 'reservation valide',
        });
        this.route.navigate(['events']);
      },
      error: () => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'error',
          title: 'Reservation non valide',
        });
        this.ngOnInit();
      },
    });
  }
}

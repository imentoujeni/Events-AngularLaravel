import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Event } from '../models/Event';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajouterevent',
  templateUrl: './ajouterevent.component.html',
  styleUrls: ['./ajouterevent.component.css'],
})
export class AjoutereventComponent {
  nom: string = '';
  prix: string = '';
  proprietere: string = '';
  date: string = '';
  lieu: string = '';
  photo: any;
  etat: string = '';
  nbreplaces!: number;
  user: Event = new Event();
  showInput: boolean = false;
  nbrereservation!: number;

  constructor(private api: ApiService, private route: Router) {}

  ngOnInit(): void {
    this.nom = '';
    this.prix = '';
    this.proprietere = '';
    this.date = '';
    this.lieu = '';
    this.photo = '';
    this.etat = '';
    this.nbreplaces = this.nbreplaces;
    this.nbrereservation = 0;
    this.decrementerPlaces();
  }
  file!: File;

  onActive() {
    this.showInput = true;
    console.log(this.showInput);
  }
  onDisable() {
    this.showInput = false;
  }
  ajouterevent() {
    this.user.nom = this.nom;
    this.user.prix = this.prix;
    this.user.proprietere = this.proprietere;
    this.user.date = this.date;
    this.user.lieu = this.lieu;
    this.user.etat = this.etat;
    this.user.nbrereservation = 1;
    this.user.nbreplaces = this.nbreplaces;
    let fd = new FormData();
    // this.file = this.photo.target.files[0];
    console.log(this.file);
    fd.append('file', this.file);
    fd.append('event', JSON.stringify(this.user));

    this.api.ajouterevent(fd).subscribe({
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
          title: 'Ajouter avec succées',
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
          title: 'Ajout Réfuser',
        });
        this.ngOnInit();
      },
    });
  }
  selectimage(image: any) {
    this.file = image.target.files[0];
  }
  decrementerPlaces(): void {
    if (this.nbrereservation < this.nbreplaces) {
      // Vérifie s'il reste des places disponibles
      this.nbreplaces--; // Décrémente le nombre de places disponibles
      this.nbrereservation++; // Incrémente le nombre de réservations
    }
  }
}

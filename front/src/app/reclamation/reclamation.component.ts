import { Component } from '@angular/core';
import { Event } from '../models/Event';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Reclamation } from '../models/reclamation';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css'],
})
export class ReclamationComponent {
  id: any;
  listeevents: any[] = [];
  evenement: any;
  reclamation: Reclamation = new Reclamation();
  message: string = '';
  prenom: string = '';
  nom: string = '';
  sujet: string = '';
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
    this.prenom = '';
    this.message = '';
    this.sujet = '';
  }
  //ajoutreclamation
  valider() {
    this.reclamation.nom = this.nom;
    this.reclamation.prenom = this.prenom;
    this.reclamation.message = this.message;
    this.reclamation.sujet = this.sujet;

    console.log(this.reclamation);

    this.api.ajoutreclamation(this.reclamation).subscribe({
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
          title: 'Reclamation envoyé',
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
          title: 'Reclamation non envoyé',
        });
        this.ngOnInit();
      },
    });
  }
}

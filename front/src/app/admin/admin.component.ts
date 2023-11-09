import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Event } from '../models/Event';
import Swal from 'sweetalert2';

//import { MatDialog } from '@angular/material/dialog';
//import { PopupComponent } from './popup.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  listeevent: any = [];
  constructor(
    //public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private authService: ApiService,
    private route: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.getAllevents();
  }

  getAllevents() {
    this.api.getevents().subscribe((res) => {
      this.listeevent = res;
      console.log(res);
    });
  }

  acceptEvent(item: any) {
    alert(item.id);
    this.api.updateEventStatus(item).subscribe(() => {});
  }
  refuseEvent(item: any) {
    item.etat = 0; // Mettre l'attribut 'etat' à 0
    this.api.updateEventStatu(item).subscribe((response) => {
      console.log(response);
      const index = this.listeevent.indexOf(item);
      // Supprimer l'élément de la liste
      this.listeevent.splice(index, 1);
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
        title: 'Evenement refusé',
      });
    });
  }
  accepterEvent(item: any) {
    item.etat = 1;
    this.api.updateEventStatus(item).subscribe((response) => {
      console.log(response);
      // Trouver l'indice de l'élément à supprimer dans la liste
      const index = this.listeevent.indexOf(item);
      // Supprimer l'élément de la liste
      this.listeevent.splice(index, 1);
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
        title: 'Evenement ajouter avec succées',
      });
    });
  }
}

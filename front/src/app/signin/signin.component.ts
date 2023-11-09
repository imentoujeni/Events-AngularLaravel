import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  email: string = '';
  mdp: string = '';
  Type: string = '1';
  nom: string = '';
  prenom: string = '';
  cin: string = '';
  dateDeNaissance: string = '';
  lieuDeNaissance: string = '';
  adresse: string = '';

  user: User = new User();
  showInput: boolean = false;

  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    this.email = '';
    this.mdp = '';
    this.nom = '';
    this.prenom = '';
    this.cin = '';
  }
  onActive() {
    this.showInput = true;
    console.log(this.showInput);
  }
  onDisable() {
    this.showInput = false;
  }
  signup() {
    this.user.email = this.email;
    this.user.mdp = this.mdp;
    this.user.nom = this.nom;
    this.user.prenom = this.prenom;
    this.user.cin = this.cin;
    this.user.dateDeNaissance = this.dateDeNaissance;
    this.user.lieuDeNaissance = this.lieuDeNaissance;
    this.user.adresse = this.adresse;

    console.log(this.user);

    this.authService.signUpclient(this.user).subscribe({
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
          title: 'inscription valide',
        });
        this.route.navigate(['/client']);
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
          title: 'inscription non valide',
        });
        this.ngOnInit();
      },
    });
  }
}

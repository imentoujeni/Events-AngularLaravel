import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/User';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = new User();

  email = '';
  mdp = '';

  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {}

  login() {
    this.user.email = this.email;
    this.user.mdp = this.mdp;

    this.authService.login(this.user).subscribe({
      next: (res) => {
        console.log('email successful');
        console.log(res);
        localStorage.setItem('connectedUser', JSON.stringify(res));
        localStorage.setItem('session', res.session);

        if (res.session === '0') {
          this.route.navigate(['/admin']);
        } else {
          this.route.navigate(['/client']);
        }
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
          title: 'accés refusé',
        });
        this.ngOnInit();
      },
    });
  }
}

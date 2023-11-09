import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-afficherreservation',
  templateUrl: './afficherreservation.component.html',
  styleUrls: ['./afficherreservation.component.css'],
})
export class AfficherreservationComponent {
  listereservation: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private authService: ApiService,
    private route: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.getAllreservation();
    //kahaw me habtch zeyed ;)
    let CnnctedUser = JSON.parse(localStorage.getItem('connectedUser') || '');
    this.geteventbyidclient(CnnctedUser.Prop.value);
  }

  getAllreservation() {
    this.api.getAllreservation().subscribe((res) => {
      this.listereservation = res;
      console.log(res);
    });
  }

  geteventbyidclient(id: any) {
    alert(id);
    this.api.geteventbyidclient(id).subscribe((res) => {
      console.log(res);
    });
  }
}

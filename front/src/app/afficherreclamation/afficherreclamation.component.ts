import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Reclamation } from '../models/reclamation';
@Component({
  selector: 'app-afficherreclamation',
  templateUrl: './afficherreclamation.component.html',
  styleUrls: ['./afficherreclamation.component.css'],
})
export class AfficherreclamationComponent {
  listereclamation: any = [];
  reclamation: Reclamation = new Reclamation();
  constructor(
    private formBuilder: FormBuilder,
    private authService: ApiService,
    private route: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.getAllreclamation();
  }

  getAllreclamation() {
    this.api.getAllreclamation().subscribe((res) => {
      this.listereclamation = res;
      console.log(res);
    });
  }

  supprimerreclamation(id: any) {
    console.log(id);
    this.api.supprimerreclamation(id).subscribe((res) => {
      this.getAllreclamation();
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lutteur-add',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './lutteur-add.component.html',
  styleUrl: './lutteur-add.component.css'
})
export class LutteurAddComponent  implements OnInit {

  lutteur = { nom: '', pays: '', taille: 0, poids: 0 };




  ngOnInit(): void {

  }

  constructor(
    private ds : DataService,
    private router: Router
    ){}


  onSubmit() {
    this.ds.addLutteur(this.lutteur).subscribe((response: any) => {
         // this.lutteurs = response;
         console.log(response);
         this.router.navigate(['/home/lutteur'])

       });
  }








}

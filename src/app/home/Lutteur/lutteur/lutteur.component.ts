import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-lutteur',
  standalone: true,
  imports: [],
  templateUrl: './lutteur.component.html',
  styleUrl: './lutteur.component.css'
})
export class LutteurComponent implements OnInit {

  private dataService: DataService = inject(DataService);

  lutteurs :any = [] ;



  ngOnInit(): void {
    this.getAllLutteurs();
  }



  getAllLutteurs() {
    this.dataService.getLutteurs().subscribe((response: any) => {
      this.lutteurs = response["lutteurs"];
      // console.log(response);
      console.log("Lutteurs:", response["lutteurs"]); // Vérifiez la console du navigateur pour voir les données récupérées
    });
  }


}

import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class DataService {

  private http : HttpClient = inject(HttpClient);
  private baseUrl = 'http://localhost/backend-main/api';

  constructor() { }


  getLutteurs():Observable<any> {
    return this.http.get(`${this.baseUrl}/getLutteurs.php`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  // addLutteur(lutteur : any) : Observable<any> {
  //   return this.http.post<any>(`${this.baseUrl}/addLutteur.php`,lutteur).pipe(
  //     tap((response) => this.log(response)),
  //     catchError((error) => this.handleError(error, null))
  //   );

  // }


  addLutteur(lutteur: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',})
    };

    return this.http.post<any>(`${this.baseUrl}/addLutteur.php`, lutteur, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }



  // addPokemon(pokemon: Pokemon): Observable<Pokemon> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };

  //   return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
  //     tap((response) => this.log(response)),
  //     catchError((error) => this.handleError(error, null))
  //   );
  // }






  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

}

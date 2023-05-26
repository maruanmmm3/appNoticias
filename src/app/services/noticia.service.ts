import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {


  constructor(private http: HttpClient) { }


  getNoticias(parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='
      + parametros.pais + '&category=' + parametros.categoria + '&apiKey=d777225ab3e241d1a5450875121cc057';

    return this.http.get(URL);
  }
}

/* https://newsapi.org/v2/top-headlines?country=us&apiKey=d777225ab3e241d1a5450875121cc057 */

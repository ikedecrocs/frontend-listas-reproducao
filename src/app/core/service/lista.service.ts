import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaReproducao } from '../model/lista.model';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  listar (): Observable<ListaReproducao[]> {
    return this.httpClient.get<ListaReproducao[]>(`${this.apiUrl}/lists`);
  }

}

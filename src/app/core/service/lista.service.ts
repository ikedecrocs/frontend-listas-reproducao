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

  // Método para listar todas as listas de reprodução existente
  listar (): Observable<ListaReproducao[]> {
    return this.httpClient.get<ListaReproducao[]>(`${this.apiUrl}/lists`);
  }

  // Método para adicionar uma nova lista de reprodução ao banco de dados
  adicionar (lista: ListaReproducao) {
    this.httpClient.post(`${this.apiUrl}/lists`, lista).subscribe(
      data => {
        console.log("Adicionado!");
        console.log(lista);
      }
    )
  }

  // Método para buscar uma lista de reprodução por nome
  buscar (nomeLista: string) {
    return this.httpClient.get<ListaReproducao>(`${this.apiUrl}/lists/${nomeLista}`);
  }

  // Método para excluir uma lista de reprodução por nome
  excluir (nomeLista: string) {
    return this.httpClient.delete(`${this.apiUrl}/lists/${nomeLista}`);
  }

}

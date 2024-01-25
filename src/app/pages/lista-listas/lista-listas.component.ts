import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListaReproducao } from 'src/app/core/model/lista.model';
import { ListaService } from 'src/app/core/service/lista.service';

@Component({
  selector: 'app-lista-listas',
  templateUrl: './lista-listas.component.html',
  styleUrls: ['./lista-listas.component.css']
})
export class ListaListasComponent implements OnInit {

  listas: ListaReproducao[];
  lista: ListaReproducao;
  listaForm: FormGroup;

  constructor(
    private service: ListaService
  ) {
    this.listas = [];
    this.lista = new ListaReproducao();
    this.listaForm = new FormGroup({
      nome: new FormControl(null),
      descricao: new FormControl(null),
      musicas: new FormControl(null),
    })
  }

  ngOnInit(): void {
      this.service.listar().subscribe(
        data => {
          this.listas = data;
          console.log(this.listas);
        }
      )
  }

}

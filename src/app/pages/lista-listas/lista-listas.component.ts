import { Component, OnInit, ViewChild } from '@angular/core';
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

  // Colunas que serão utilizadas nas tabelas
  displayedColumns: string[] = ['nome', 'descricao', 'acoes'];
  displayedColumnsMusicas: string[] = ['titulo', 'artista', 'album', 'ano', 'genero'];

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
    this.listar();
  }

  // Método para recuperar a lista de informações dentro do sistema, colocando-as dentro do atributo listas
  listar () {
    this.service.listar().subscribe(
      data => {
        this.listas = data;
        console.log(this.listas);
      }
    )
  }

  // Método para recuperar as informações detalhas do registro selecionado na tabela, colocando estes dados no atributo lista
  abrirDetalhes(nomeLista: string) {
    console.log(`Buscando ${nomeLista}`)
    this.service.buscar(nomeLista).subscribe(
      data => {
        this.lista = data;
        console.log(this.lista);
      }
    )
  }

  // Excluí o registro selecionado
  excluir(nomeLista: string) {
    this.service.excluir(nomeLista).subscribe(
      data => {
        this.listar();
        this.lista = new ListaReproducao();
      }
    );
  }

}

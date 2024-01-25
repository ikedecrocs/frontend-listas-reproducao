import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ListaReproducao } from 'src/app/core/model/lista.model';
import { Musica } from 'src/app/core/model/musica.model';
import { ListaService } from 'src/app/core/service/lista.service';

@Component({
  selector: 'app-form-lista',
  templateUrl: './form-lista.component.html',
  styleUrls: ['./form-lista.component.css']
})
export class FormListaComponent {

  formLista: FormGroup;
  lista: ListaReproducao;

  constructor(
    private service: ListaService,
    private fb: FormBuilder
  ) {
    this.lista = new ListaReproducao();

    this.formLista = this.fb.group({
      nome: new FormControl(null),
      descricao: new FormControl(null),
      quantidadeMusicas: new FormControl(0),
      musicas: this.fb.array([
        this.fb.group({
          titulo: [''],
          artista: [''],
          album: [''],
          ano: [''],
          genero: [''],
        }),
      ])
    });
  }

  get controleMusicas (): any {
    return this.formLista.get('musicas') as FormArray;
  }

  adicionarMusica () {
    const musicas = this.formLista.get('musicas') as FormArray;
    console.log(musicas)
    if (!musicas.invalid) {
      musicas.push(
        this.fb.group({
          titulo: [''],
          artista: [''],
          album: [''],
          ano: [''],
          genero: [''],
        })
      );
    }
  }

  removerMusica (index: any) {
    const musicas = this.formLista.get('musicas') as FormArray;
    musicas.removeAt(index);
  }

  adicionarRegistro () {
    this.lista.nome = this.formLista.get('nome')?.value;
    this.lista.descricao = this.formLista.get('descricao')?.value;
    this.lista.musicas = this.formLista.get('musicas')?.value;

    this.service.adicionar(this.lista);
  }

}

import { Musica } from "./musica.model";

// Model para listas de reprodução
export class ListaReproducao {
    nome: String = '';
    descricao: String = '';
    musicas: Musica[] = [];
}
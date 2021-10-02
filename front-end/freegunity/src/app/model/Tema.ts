import { Postagem } from './Postagem';

// Classe do back-end que vai ser exportada
export class Tema {
    public id: number
    public titulo: string
    public texto: string
    public img: string

    // Relacionamento entre as classes
    public postagem: Postagem[]
}
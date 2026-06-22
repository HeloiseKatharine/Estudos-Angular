import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro';
import { livros } from 'src/app/mock-livros';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  standalone: true,
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss'],
})

export class ListaLivrosComponent implements OnInit {
  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

  ngOnInit() {
    this.livrosPorGenero = new Map();
    livros.forEach((livro) => {
      const generoId = livro.genero.id;
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(livro);
    });

    this.generos = [
      {
        id: 'romance',
        value: 'Romance',
        livros: this.livrosPorGenero.get('romance') ?? [],
      },
      {
        id: 'ficcao',
        value: 'Ficção',
        livros: this.livrosPorGenero.get('ficcao') ?? [],
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get('fantasia') ?? [],
      },
      {
        id: 'fabula',
        value: 'Fábula',
        livros: this.livrosPorGenero.get('fabula') ?? [],
      },
    ];
  }
}

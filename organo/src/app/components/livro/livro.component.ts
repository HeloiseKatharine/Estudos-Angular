import { Component, input } from '@angular/core';
import { Livro } from './livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {

  // recebendo informações de fora - propriedade de entrada
  livro = input.required<Livro>();

  // método 
 alternarFavorito(){
  // objeto
  this.livro().favorito = !this.livro().favorito
 }

}

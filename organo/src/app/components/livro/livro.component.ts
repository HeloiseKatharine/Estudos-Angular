import { Component, input } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  standalone: true,
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent {

  // recebendo informações de fora - propriedade de entrada
  
  // livro = Input.required<Livro>();
  livro = input.required<Livro>();

  // método 
 alternarFavorito(){
  // objeto
  this.livro.favorito = !this.livro.favorito
 }

}

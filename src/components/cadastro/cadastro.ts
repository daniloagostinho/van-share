import { Component } from '@angular/core';

/**
 * Generated class for the CadastroComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroComponent {

  text: string;

  constructor() {
    console.log('Hello CadastroComponent Component');
    this.text = 'Hello World';
  }

}

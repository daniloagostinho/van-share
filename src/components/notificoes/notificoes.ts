import { Component } from '@angular/core';

/**
 * Generated class for the NotificoesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notificoes',
  templateUrl: 'notificoes.html'
})
export class NotificoesComponent {

  text: string;

  constructor() {
    console.log('Hello NotificoesComponent Component');
    this.text = 'Hello World';
  }

}

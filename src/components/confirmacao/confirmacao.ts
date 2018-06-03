import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NotificoesComponent } from '../notificoes/notificoes';


@Component({
  selector: 'confirmacao',
  templateUrl: 'confirmacao.html'
})
export class ConfirmacaoComponent {

  text: string;

  constructor(public navCtrl: NavController) {
  }

  goToNotificacoes(){
    this.navCtrl.push(NotificoesComponent);
   }

}

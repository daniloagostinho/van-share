import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmacaoComponent } from '../../components/confirmacao/confirmacao';
import { CadastroComponent } from '../../components/cadastro/cadastro';
import { NotificoesComponent } from '../../components/notificoes/notificoes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  todo = {}

  logForm(form) {
    console.log(form.value)
  }

  goToConfirmacao() {
    this.navCtrl.push(ConfirmacaoComponent);
   }

   goToCadastro() {
    this.navCtrl.push(CadastroComponent);
   }

   goToNotificacoes() {
    this.navCtrl.push(NotificoesComponent);
   }
}

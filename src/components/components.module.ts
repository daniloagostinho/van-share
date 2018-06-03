import { NgModule } from '@angular/core';
import { ConfirmacaoComponent } from './confirmacao/confirmacao';
import { CadastroComponent } from './cadastro/cadastro';
import { NotificoesComponent } from './notificoes/notificoes';
@NgModule({
	declarations: [ConfirmacaoComponent,
    CadastroComponent,
    NotificoesComponent],
	imports: [],
	exports: [ConfirmacaoComponent,
    CadastroComponent,
    NotificoesComponent]
})
export class ComponentsModule {}

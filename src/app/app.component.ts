import { Component, OnInit } from '@angular/core';
import { Mensagem } from './interfaces/gerais.interface';

import { Colaborador } from './interfaces/colaborador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Indicações';
  carregando!: boolean;
  dadosMensagem: Mensagem = { tipo: 0 };
  participantes: Colaborador[] = [];
  desabilitaCampos: boolean = false;
  usuario!: string;
  token!: string;

  ngOnInit(): void {
    this.carregando = false;
  }

  getValorSpinner(valor: boolean) {
    this.carregando = valor;
  }

  getDadosMensagem(dados: Mensagem) {
    // console.log(dados);
    this.dadosMensagem = dados;
    setTimeout(() => {
      this.dadosMensagem = { tipo: 0 };
    }, 3000);
  }

  obterParticipantes(participantes: Colaborador[]) {
    this.participantes = participantes;
  }
}

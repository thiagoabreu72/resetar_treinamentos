import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Mensagem, TokenRHID } from '../interfaces/gerais.interface';
import {
  ArquivoG5,
  DadosMarcacoes,
  Marcacao,
  Marcacoes,
  MarcacoesG5,
} from '../interfaces/marcacoes.interface';
import { ServiceService } from '../services/service.service';
import { Colaborador } from '../interfaces/colaborador.interface';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent {
  @Input() dados: Marcacao[] = [];
  @Output() enviaMensagem = new EventEmitter<Mensagem>();
  @Output() habilitaSpinner = new EventEmitter<boolean>();
  carregando!: boolean;
  habilitar: boolean = false;
  dataInicial!: Date;
  dataFinal!: Date;
  tokenSenior: string = '';
  tokenRHID: TokenRHID = { token: '' };
  colaborador: Colaborador[] = [];
  bloquearCampos: boolean = false;
  private codUsuario: number = 0;

  dadosColaborador: Marcacoes = {
    dataInicio: '01/01/2000',
    dataFim: '01/01/2000',
  };
  dadosMensagem: Mensagem = { tipo: 0 };
  dadosTab: Marcacao[] = [];
  telaPequena: boolean = false;

  constructor(private service: ServiceService) {
    this.habilitaSpinner.emit(false);
  }

  getValorSpinner(valor: boolean) {
    this.habilitaSpinner.emit(valor);
  }

  resetaCurso() {
    this.habilitaSpinner.emit(true);
    this.service.resetar().subscribe({
      next: (retorno) => {
        alert(retorno.msgRet);
        this.habilitaSpinner.emit(false);
      },
      error: (e) => {
        alert(e.message);
      },
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Mensagem } from '../interfaces/gerais.interface';
import { ArquivoG5 } from '../interfaces/marcacoes.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  // Declara variáveis para montagem da url

  dadosMensagem: Mensagem = {};

  private obterMensagem = new Subject<Mensagem>(); // Criação do canal de comunicação.
  mensagem$ = this.obterMensagem.asObservable(); // instanciando o Observable para mudanças no valor da variável

  constructor(private http: HttpClient) {}

  resetar(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      user: 'integracao.app',
      pass: 'D3v@98fm',
      encryptionType: 0,
    });

    return this.http.post<ArquivoG5>(
      'https://sistemas-hom.vanin.com:8183/SXI-API/G5Rest?server=https://sistemas-hom.vanin.com:8183&module=tr&service=com_prisma_treinamentos&port=resetaFrequencia',
      { resetar: 'S' },
      {
        headers,
        // responseType: 'blob' as 'json',
      }
    );
  }
}

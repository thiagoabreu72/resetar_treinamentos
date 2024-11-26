export interface Marcacoes {
  empresa?: number;
  tipo?: number;
  cadastro?: number;
  nome?: string;
  dataInicio?: Date | string;
  dataFim?: Date | string;
  cadastro_rhid?: number;
}

export interface Marcacao {
  _companyId?: number;
  idPerson?: number;
  hash?: string;
  person_name?: string;
  nsr?: number;
  dateTime: any;
}

export interface MarcacoesG5 {
  token: string;
  cadRhi: number;
  datIni: string;
  datFim: string;
  dados?: DadosMarcacoes[];
  msgRet?: string;
}

export interface DadosMarcacoes {
  empRhi?: number;
  numNsr?: number;
  datMar?: string;
  hash?: string;
  _companyId?: number;
  idPerson?: number;
  person_name?: string;
  nsr?: number;
  dateTime: any;
}

export interface ArquivoG5 {
  token?: string;
  empRhi?: number;
  numNsr?: number;
  arquivo?: any;
  msgRet?: string;
  erroExecucao?: string;
}

export interface Mensagem {
  tipo?: number; //  1 - Sucesso , 2 - Info , 3 - Alerta, 4 - Erro
  mensagem?: string;
}

export interface TokenRHID {
  accessToken?: string;
  expiredPassword?: boolean;
  isPerson?: boolean;
  listCustomer?: any;
  revendaInadimplente?: boolean;
  token?: string;
}

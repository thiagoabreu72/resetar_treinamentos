export interface ColaboradorPosto {
  numEmp: number;
  estPos: number;
  posTra: string;
  dados?: Colaborador[];
}

export interface Colaborador {
  numEmp?: number;
  tipCol?: number;
  numCad?: number;
  nomFun?: string;
  estPos?: number;
  posTra?: string;
  desPos?: string;
  estCar?: number;
  codCar?: string;
  titCar?: string;
  priApr?: string;
  cadApr?: number;
  nomApr?: string;
  datCon?: string;
}

export interface GetColaborador {
  codUsu?: number;
  numEmp?: number;
  filFil?: string;
  codFil?: number;
  lisTos?: string;
  dados?: Colaborador;
  msgRet?: string;
}

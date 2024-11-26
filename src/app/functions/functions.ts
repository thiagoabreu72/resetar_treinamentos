export function converteUrl(
  url: string,
  porta: any,
  modulo: string,
  contexto: string
) {
  let novaUrl: string[] = url.split('/');
  let servico = novaUrl[4].replace(`${modulo}_Sync`, '').replace(`?wsdl`, '');
  let urlFinal = `${novaUrl[0]}//${novaUrl[2]}/${contexto}/G5Rest?server=${novaUrl[0]}//${novaUrl[2]}&module=${modulo}&service=${servico}&port=${porta}`;
  //console.log(urlFinal);
  return urlFinal;
}

export function formatarDataCalendario(data: string) {
  const date = new Date(data);
  const dia = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const ano = date.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

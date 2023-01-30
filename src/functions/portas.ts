import ModelPorta from "../model/porta";

export function criarPortas(
  qtde: number,
  portaComPresente: number
): ModelPorta[] {
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1;
    const temPresente = numero === portaComPresente;

    return new ModelPorta(numero, temPresente);
  });
}

export function atualizarPortas(
  portas: ModelPorta[],
  portaModificada: ModelPorta
): ModelPorta[] {
  return portas.map((portaAtual) => {
    const igualModificada = portaAtual.numero === portaModificada.numero;

    if (igualModificada) {
      return portaModificada;
    } else {
      return portaModificada.aberta ? portaAtual : portaAtual.desmarcar();
    }
  });
}

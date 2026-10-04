import type { Despesa } from "./tipos";

export function totalGasto(despesas: Despesa[]): number {
  let total = 0;

  for (const despesa of despesas) {
    total += despesa.valor;
  }

  return total;
}
export function adicionarDespesa(
  despesas: Despesa[],
  nova: Despesa,
): Despesa[] {
    if (nova.valor <= 0) {
    throw new Error("O valor deve ser maior que zero.");
  }

  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error("O mês deve estar entre 1 e 12.");
  }

  // Cria outro array para preservar a lista recebida.
  return [...despesas, nova];
}
export function removerDespesa(
  despesas: Despesa[],
  id: number,
): Despesa[] {
  throw new Error("não implementado");
}
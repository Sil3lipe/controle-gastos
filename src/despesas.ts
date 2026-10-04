import type { Despesa } from "./tipos";

export function totalGasto(despesas: Despesa[]): number {
  let total = 0;

  for (const despesa of despesas) {
    total += despesa.valor;
  }

  return total;
}
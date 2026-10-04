import type { Categoria, Despesa } from "./tipos";
import { CATEGORIAS } from "./tipos";

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];

  for (const categoria of CATEGORIAS) {
    const linha: number[] = [];

    for (let mes = 1; mes <= 12; mes++) {
      let total = 0;

      for (const despesa of despesas) {
        if (despesa.categoria === categoria && despesa.mes === mes) {
          total += despesa.valor;
        }
      }

      linha.push(total);
    }

    matriz.push(linha);
  }

  return matriz;
}
export function descricaoCategoria(categoria: Categoria): string {
  switch (categoria) {
    case "alimentação":
      return "Alimentação";
    case "transporte":
      return "Transporte";
    case "lazer":
      return "Lazer";
    case "moradia":
      return "Moradia";
  }
}
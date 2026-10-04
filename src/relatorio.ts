import type { Categoria, Despesa } from "./tipos";
import { CATEGORIAS } from "./tipos";
import {
  despesasDaCategoria,
  totalGasto,
  maiorDespesa,
} from "./despesas";

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
export function formatarRelatorio(despesas: Despesa[]): string {
  const linhas: string[] = [
    "Relatório de gastos".toUpperCase(),
    "Categoria".padEnd(17) + "Total do ano".padStart(13),
  ];

  for (const categoria of CATEGORIAS) {
    const total = totalGasto(despesasDaCategoria(despesas, categoria));
    const nome = descricaoCategoria(categoria);
    const valor = `R$ ${total.toFixed(2)}`;

    linhas.push(nome.padEnd(17) + valor.padStart(13));
  }

  linhas.push(`Total geral: R$ ${totalGasto(despesas).toFixed(2)}`);

  const maior = maiorDespesa(despesas);

  if (maior === undefined) {
    linhas.push("Maior despesa: nenhuma");
  } else {
    linhas.push(
      `Maior despesa: ${maior.descricao} - R$ ${maior.valor.toFixed(2)}`,
    );
  }

  return linhas.join("\n");

}
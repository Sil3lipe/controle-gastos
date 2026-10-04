import type { Categoria, Despesa } from "./tipos";

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
export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  throw new Error("não implementado");
}
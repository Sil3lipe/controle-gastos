import { expect, it } from "vitest";
import {
  descricaoCategoria,
  matrizCategoriaMes,
} from "./relatorio";
import type { Despesa } from "./tipos";

it("retorna o nome de exibição de alimentação", () => {
  expect(descricaoCategoria("alimentação")).toBe("Alimentação");
});

it("retorna o nome de exibição de transporte", () => {
  expect(descricaoCategoria("transporte")).toBe("Transporte");
});

it("retorna o nome de exibição de lazer", () => {
  expect(descricaoCategoria("lazer")).toBe("Lazer");
});

it("retorna o nome de exibição da última categoria, moradia", () => {
  expect(descricaoCategoria("moradia")).toBe("Moradia");
});
it("soma por categoria e mês na ordem definida, sem alterar as despesas", () => {
  const despesas: Despesa[] = [
    {
      id: 1,
      descricao: "Almoço",
      valor: 20,
      categoria: "alimentação",
      mes: 1,
    },
    {
      id: 2,
      descricao: "Jantar",
      valor: 30,
      categoria: "alimentação",
      mes: 1,
    },
    {
      id: 3,
      descricao: "Ônibus",
      valor: 15,
      categoria: "transporte",
      mes: 2,
    },
    {
      id: 4,
      descricao: "Cinema",
      valor: 40,
      categoria: "lazer",
      mes: 3,
    },
    {
      id: 5,
      descricao: "Aluguel",
      valor: 800,
      categoria: "moradia",
      mes: 12,
    },
  ];

  const antes = despesas.map((despesa) => ({ ...despesa }));

  expect(matrizCategoriaMes(despesas)).toEqual([
    [50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 800],
  ]);

  expect(despesas).toEqual(antes);
});

it("retorna quatro linhas de doze zeros para uma lista vazia", () => {
  expect(matrizCategoriaMes([])).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});
import { expect, it } from "vitest";
import { totalGasto, adicionarDespesa } from "./despesas";
import type { Despesa } from "./tipos";

it("retorna zero quando a lista de despesas está vazia", () => {
const resultado = totalGasto([])
expect(resultado).toBe(0)
});
it("soma os valores de todas as despesas", () => {
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
descricao: "Ônibus",
valor: 35,
categoria: "transporte",
    mes: 1,
  },
];
const resultado = totalGasto(despesas);
expect(resultado).toBe(55)
});
it("adiciona uma despesa sem alterar o array original", () => {
  const almoco: Despesa = {
    id: 1,
    descricao: "Almoço",
    valor: 20,
    categoria: "alimentação",
    mes: 1,
  };

  const onibus: Despesa = {
    id: 2,
    descricao: "Ônibus",
    valor: 35,
    categoria: "transporte",
    mes: 2,
  };

  const original: Despesa[] = [almoco];
  const resultado = adicionarDespesa(original, onibus);

  expect(resultado).toEqual([almoco, onibus]);

  // A função deve criar outro array para preservar a lista recebida.
  expect(original).toEqual([almoco]);
  expect(resultado).not.toBe(original);
});

it("adiciona uma despesa a uma lista vazia", () => {
  const nova: Despesa = {
    id: 3,
    descricao: "Cinema",
    valor: 30,
    categoria: "lazer",
    mes: 3,
  };

  const resultado = adicionarDespesa([], nova);

  expect(resultado).toEqual([nova]);
});

it.each([0, -10])("rejeita uma despesa com valor %s", (valor) => {
  const nova: Despesa = {
    id: 4,
    descricao: "Valor inválido",
    valor,
    categoria: "moradia",
    mes: 1,
  };

  expect(() => adicionarDespesa([], nova)).toThrow(/valor/i);
});

it.each([0, 13])("rejeita uma despesa com mês %s", (mes) => {
  const nova: Despesa = {
    id: 5,
    descricao: "Mês inválido",
    valor: 100,
    categoria: "moradia",
    mes,
  };

  expect(() => adicionarDespesa([], nova)).toThrow(/mês/i);
});

it.each([1, 12])("aceita uma despesa no mês %s", (mes) => {
  const nova: Despesa = {
    id: 6,
    descricao: "Aluguel",
    valor: 800,
    categoria: "moradia",
    mes,
  };

  expect(adicionarDespesa([], nova)).toEqual([nova]);
});
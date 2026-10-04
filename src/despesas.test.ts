import { expect, it } from "vitest";
import {
  totalGasto,
  adicionarDespesa,
  removerDespesa,
  despesasDaCategoria,
  maiorDespesa,
} from "./despesas";
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
it("remove a despesa pelo id sem alterar o array original", () => {
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

  const original: Despesa[] = [almoco, onibus];
  const resultado = removerDespesa(original, 1);

  expect(resultado).toEqual([onibus]);
  expect(original).toEqual([almoco, onibus]);
  expect(resultado).not.toBe(original);
});

it("retorna uma cópia quando o id não existe", () => {
  const cinema: Despesa = {
    id: 3,
    descricao: "Cinema",
    valor: 30,
    categoria: "lazer",
    mes: 3,
  };

  const original: Despesa[] = [cinema];
  const resultado = removerDespesa(original, 999);

  expect(resultado).toEqual([cinema]);
  expect(original).toEqual([cinema]);
  expect(resultado).not.toBe(original);
});

it("retorna outro array vazio ao remover de uma lista vazia", () => {
  const original: Despesa[] = [];
  const resultado = removerDespesa(original, 1);

  expect(resultado).toEqual([]);
  expect(resultado).not.toBe(original);
});
it("retorna somente as despesas da categoria sem alterar a original", () => {
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

  const jantar: Despesa = {
    id: 3,
    descricao: "Jantar",
    valor: 40,
    categoria: "alimentação",
    mes: 3,
  };

  const original: Despesa[] = [almoco, onibus, jantar];
  const resultado = despesasDaCategoria(original, "alimentação");

  expect(resultado).toEqual([almoco, jantar]);
  expect(original).toEqual([almoco, onibus, jantar]);
  expect(resultado).not.toBe(original);
});

it("retorna uma lista vazia quando não há despesas da categoria", () => {
  const cinema: Despesa = {
    id: 4,
    descricao: "Cinema",
    valor: 30,
    categoria: "lazer",
    mes: 1,
  };

  expect(despesasDaCategoria([cinema], "moradia")).toEqual([]);
});

it("retorna uma lista vazia ao filtrar uma lista vazia", () => {
  expect(despesasDaCategoria([], "transporte")).toEqual([]);
});
it("retorna a despesa de maior valor sem alterar a ordem original", () => {
  const almoco: Despesa = {
    id: 1,
    descricao: "Almoço",
    valor: 20,
    categoria: "alimentação",
    mes: 1,
  };

  const aluguel: Despesa = {
    id: 2,
    descricao: "Aluguel",
    valor: 800,
    categoria: "moradia",
    mes: 2,
  };

  const cinema: Despesa = {
    id: 3,
    descricao: "Cinema",
    valor: 30,
    categoria: "lazer",
    mes: 3,
  };

  const original: Despesa[] = [almoco, aluguel, cinema];

  expect(maiorDespesa(original)).toBe(aluguel);
  expect(original).toEqual([almoco, aluguel, cinema]);
});

it("retorna undefined quando a lista está vazia", () => {
  expect(maiorDespesa([])).toBeUndefined();
});

it("retorna a própria despesa quando a lista tem um único item", () => {
  const onibus: Despesa = {
    id: 4,
    descricao: "Ônibus",
    valor: 35,
    categoria: "transporte",
    mes: 1,
  };

  expect(maiorDespesa([onibus])).toBe(onibus);
});
it("mantém a primeira despesa em caso de empate no maior valor", () => {
  const cinema: Despesa = {
    id: 10,
    descricao: "Cinema",
    valor: 50,
    categoria: "lazer",
    mes: 1,
  };

  const teatro: Despesa = {
    id: 11,
    descricao: "Teatro",
    valor: 50,
    categoria: "lazer",
    mes: 2,
  };

  expect(maiorDespesa([cinema, teatro])).toBe(cinema);
  expect(maiorDespesa([teatro, cinema])).toBe(teatro);
});
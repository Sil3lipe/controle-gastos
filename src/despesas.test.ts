import { expect, it } from "vitest";
import { totalGasto } from "./despesas";
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
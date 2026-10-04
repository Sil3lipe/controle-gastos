import { expect, it } from "vitest";
import { descricaoCategoria } from "./relatorio";

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
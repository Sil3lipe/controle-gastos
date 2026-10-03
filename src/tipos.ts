// Union type: limita as categorias às quatro previstas no projeto.
export type Categoria =
  | "alimentação"
  | "transporte"
  | "lazer"
  | "moradia";

export interface Despesa {
  // readonly impede reatribuir o identificador pelo código TypeScript.
  readonly id: number;
  descricao: string;
  valor: number;
  categoria: Categoria;

  // O intervalo de 1 a 12 será validado ao adicionar uma despesa.
  mes: number;

  // Opcional porque nem toda despesa precisa de uma observação.
  observacao?: string;
}

// A ordem define as linhas da matriz; readonly impede alterar o array.
export const CATEGORIAS: readonly Categoria[] = [
  "alimentação",
  "transporte",
  "lazer",
  "moradia",
];
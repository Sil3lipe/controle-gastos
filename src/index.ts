import type { Despesa } from "./tipos";
import {
  adicionarDespesa,
  removerDespesa,
  despesasDaCategoria,
  totalGasto,
  maiorDespesa,
} from "./despesas";
import {
  descricaoCategoria,
  matrizCategoriaMes,
  formatarRelatorio,
} from "./relatorio";

const exemplos: Despesa[] = [
  {
    id: 1,
    descricao: "Supermercado",
    valor: 250,
    categoria: "alimentação",
    mes: 1,
    observacao: "Compras do mês",
  },
  {
    id: 2,
    descricao: "Ônibus",
    valor: 80,
    categoria: "transporte",
    mes: 1,
  },
  {
    id: 3,
    descricao: "Cinema",
    valor: 40,
    categoria: "lazer",
    mes: 1,
  },
  {
    id: 4,
    descricao: "Aluguel de janeiro",
    valor: 900,
    categoria: "moradia",
    mes: 1,
  },
  {
    id: 5,
    descricao: "Restaurante",
    valor: 120,
    categoria: "alimentação",
    mes: 2,
  },
  {
    id: 6,
    descricao: "Combustível",
    valor: 150,
    categoria: "transporte",
    mes: 2,
  },
  {
    id: 7,
    descricao: "Teatro",
    valor: 60,
    categoria: "lazer",
    mes: 3,
  },
  {
    id: 8,
    descricao: "Energia elétrica",
    valor: 180,
    categoria: "moradia",
    mes: 3,
  },
];

// Cada adição valida a despesa e devolve outro array.
let despesas: Despesa[] = [];

for (const exemplo of exemplos) {
  despesas = adicionarDespesa(despesas, exemplo);
}

console.log(formatarRelatorio(despesas));

console.log("\nMatriz: linhas por categoria e colunas de janeiro a dezembro");
console.log(matrizCategoriaMes(despesas));

const alimentacao = despesasDaCategoria(despesas, "alimentação");

console.log(
  `\nTotal de ${descricaoCategoria("alimentação")}: R$ ${totalGasto(alimentacao).toFixed(2)}`,
);

const maior = maiorDespesa(despesas);

if (maior !== undefined) {
  console.log(`Identificador da maior despesa: ${maior.id}`);
}

const semCinema = removerDespesa(despesas, 3);

console.log(`\nQuantidade original: ${despesas.length}`);
console.log(`Quantidade após remover Cinema em outra lista: ${semCinema.length}`);
# Controle de Gastos

Projeto individual em TypeScript que registra despesas e gera um relatório por categoria e mês. O programa utiliza dados de exemplo e não solicita entradas do usuário.

## Instalação e execução

É necessário ter Node.js e npm instalados.

Instalar as dependências:

```sh
npm ci
```

Executar os testes uma vez, sem modo watch:

```sh
npm test
```

Verificar os tipos sem gerar arquivos compilados:

```sh
npx tsc --noEmit
```

Executar o programa:

```sh
npm run dev
```

## Organização

- `src/tipos.ts`: define a interface Despesa, o tipo Categoria e a ordem das categorias.
- `src/despesas.ts`: adiciona, remove e filtra despesas, calcula o total e encontra a maior despesa.
- `src/relatorio.ts`: fornece os nomes de exibição, a matriz por categoria e mês e o relatório textual.
- `src/index.ts`: demonstra as funções com oito despesas, quatro categorias e três meses.
- `src/despesas.test.ts`: testa as funções de despesas.
- `src/relatorio.test.ts`: testa as funções do relatório.

## Arquivos de configuração

- `package.json`: identifica o projeto, declara as dependências de desenvolvimento e define os scripts de testes e execução.
- `package-lock.json`: registra as versões resolvidas das dependências para instalações reproduzíveis.
- `tsconfig.json`: configura a verificação rigorosa com strict, os módulos do Node e as pastas de origem e saída.
- `.gitignore`: impede o registro de node_modules e dist no Git.
- Não há configuração separada do Vitest: a descoberta dos arquivos de teste usa as opções padrão, e o script executa vitest run.

O script de testes inclui `--passWithNoTests`, utilizado na configuração inicial. Os testes existentes são executados normalmente, e suas falhas continuam causando erro.

## Modelagem e comportamento

O identificador é numérico e readonly, impedindo sua reatribuição pelo TypeScript. A observação é opcional porque nem toda despesa precisa de uma anotação.

Categoria é um union type com alimentação, transporte, lazer e moradia. O array CATEGORIAS preserva essa ordem para as linhas da matriz.

Adicionar uma despesa exige valor maior que zero e mês entre 1 e 12. As funções preservam o array recebido. Os novos arrays podem compartilhar os mesmos objetos de despesas; não são cópias profundas.

A matriz tem quatro linhas e doze colunas, de janeiro a dezembro, e é construída somente com laços for. O relatório soma os meses fornecidos por categoria, apresenta duas casas decimais e mantém a primeira despesa encontrada em caso de empate no maior valor.

## Registro de uso de IA

Foi utilizado o Codex para diagnóstico de erros e revisão guiada. A configuração foi executada pelo estudante.
Os primeiros testes foram construídos com as orientações passadas pelo professor. Posteriormente, a pedido do estudante, a IA também forneceu os testes completos.

| Função | Participação da IA | Testes e ajustes | Revisão |
|---|---|---|---|
| totalGasto | Implementação e orientação detalhada dos testes | Soma e lista vazia; implementação sem ajustes | Revisão guiada realizada |
| adicionarDespesa | Testes e implementação | Valores e meses inválidos, limites, lista vazia e preservação do original | Revisão guiada realizada |
| removerDespesa | Testes e implementação | Id existente, inexistente e lista vazia | Revisão guiada realizada |
| despesasDaCategoria | Testes e implementação | Categoria presente, ausente e lista vazia | Revisão guiada realizada |
| maiorDespesa | Testes e implementação | Empate com inversão da ordem | Revisão guiada realizada |
| descricaoCategoria | Testes e implementação com switch | As quatro categorias | Revisão guiada realizada |
| matrizCategoriaMes | Testes e implementação com laços | Soma por célula, meses extremos, lista vazia e preservação das despesas | Revisão guiada realizada |
| formatarRelatorio | Testes e implementação | Relatório normal e vazio; padEnd corrigido de 16 para 17 | Revisão guiada realizada |

## Reflexão sobre o processo
  
A IA forneceu os testes completos.
A implementação inicial do relatório tinha um espaço a menos, identificado pelos testes.
Foi necessário ajustar padEnd de 16 para 17 e restaurar uma função removida durante a edição.
Escolhi investigar empates em maiorDespesa, e a IA escreveu o teste que inverte a ordem das despesas.
Os 28 testes passaram; concluí uma revisão guiada sobre lista vazia, matriz, alinhamento e nomes das categorias.

## Resultado verificado

O programa de exemplo apresentou total geral de R$ 1780.00 e maior despesa de R$ 900.00, referente ao aluguel de janeiro.

Na última execução, os 28 testes passaram e a verificação de tipos terminou sem erros.
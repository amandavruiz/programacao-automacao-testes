# Serviço de Pagamentos

Projeto desenvolvido em Node.js para gerenciamento de pagamentos, com testes automatizados utilizando Mocha e Node Assert.

## Objetivo

Implementar uma classe responsável por:

* Realizar pagamentos.
* Armazenar pagamentos em uma lista.
* Classificar pagamentos por categoria.
* Consultar o último pagamento realizado.

## Regras de Negócio

Cada pagamento possui as seguintes propriedades:

* `codigoBarras`
* `empresa`
* `valor`
* `categoria`

A categoria é definida de acordo com o valor do pagamento:

| Valor                   | Categoria |
| ----------------------- | --------- |
| Maior que 100,00        | cara      |
| Menor ou igual a 100,00 | padrão    |

## Estrutura do Projeto

```text
.
├── src
│   └── ServicoDePagamento.js
├── test
│   └── ServicoDePagamento.test.js
├── package.json
├── .gitignore
└── README.md
```

## Tecnologias Utilizadas

* Node.js
* Mocha
* Node Assert

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd servico-pagamentos
```

Instale as dependências:

```bash
npm install
```

## Executando os Testes

Para executar todos os testes:

```bash
npm test
```

ou

```bash
npx mocha
```

## Casos de Teste Implementados

* Deve realizar pagamento com categoria "cara" quando o valor for maior que 100.
* Deve realizar pagamento com categoria "padrão" quando o valor for menor ou igual a 100.
* Deve retornar o último pagamento realizado.
* Deve retornar `null` quando não houver pagamentos cadastrados.

## Exemplo de Uso

```javascript
import ServicoDePagamento from './src/ServicoDePagamento.js';

const servico = new ServicoDePagamento();

servico.pagar(
  '0987-7656-3475',
  'Amanda Ruiz',
  132.45
);

console.log(servico.consultarUltimoPagamento());
```

Saída esperada:

```javascript
{
  codigoBarras: '0987-7656-3475',
  empresa: 'Amanda Ruiz',
  valor: 132.45,
  categoria: 'cara'
}
```

## Autor

Amanda Ruiz
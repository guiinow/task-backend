<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Descrição

O sistema tasks tem como objetivo ajudar um usuário a criar e manusear tarefas

Neste sistema, um determinado usuário poderá criar tarefas e gerir os estados e configurações delas (todo), com o intuito de poder organizar o seu dia

No presente board, será criado o backend do sistema de tarefas

O projeto tem como objetivo familiarizar na prática o dev com as tecnologias usadas no Clubpetro

Serão utilizadas as seguintes tecnologias:

 Nest.js

Node (utilizamos geralmente no CP a v12.18.3). Porém para este projeto podemos usar a versão LTS do node

Typescript

Postgres

gRPC

Swagger


Serviços a serem desenvolvidos:

Teremos 2 microserviços:

Tasks:

Este serviço será responsável por gerir o recursos de tarefas, tais como:

Criação

Atualização

Deleção

Busca

Esta é a modelagem da tabela de tasks:


Todo:

Este serviço será responsável por definir o estado de uma determinada tarefa. Ele terá recursos como:

Criação de um todo associado a uma task

Atualização de um todo associado a uma task

Obter um todo associado a uma task

Obter todos os todos cadastrados

Esta é a modelagem da tabela de todos:


Regras de negócio:

Task (host gRPC):

Este serviço será responsável por gerir o recursos de tarefas, tais como:

Criação

Atualização

Deleção

Busca de uma única tarefa

Busca de todas as tarefas disponíveis

Ao criar uma nova tarefa, o dado active deve ser opcional (default true)

Duas tarefas não podem ter os nomes repetidos

Precisamos ter um CRUD completo para o recurso de tasks

Todo (client gRPC):

Ao criar um novo todo, o dado done deve ser opcional (default false)

Um todo deve estar relacionado a somente uma task. 

Ao criar/atualizar e criar um todo, precisamos verificar se a task está associada  a outro todo

Para ser associado a um todo, a task deve estar ativa, caso não estiver, precisamos lançar uma exceção

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

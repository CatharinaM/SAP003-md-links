# Markdown Links

## Considerações gerais:
Markdown é uma linguagem de marcação muito popular entre os programadores. É usada em muitas plataformas que manipulam texto (GitHub, fórum, blogs e etc).

Os arquivos Markdown normalmente contém links que muitas vezes estão quebrados, ou que já não são válidos e isso prejudica muito o valor da informação que está ali.

Uma comunidade open source nos propôs criar uma ferramenta, usando Node.js, que leia e analise arquivos no formato Markdown, para verificar os arquivos que contenham links e mostrar algumas estatísticas.

## Resumo do projeto:
O projeto é uma biblioteca que consegue retirar de um documento Markdown(.md) os links e pode ser executada por uma CLI (Command Line Interface - Interface de Linha de Comando) que retorna um array de objetos.

## Como instalar:

Para instalar basta rodar em seu terminal a seguinte linha:

$ npm install -g CatharinaM/SAP003-md-links

Obs.: Para executar esta biblioteca você deverá ter o node e npm instalados.


## Como fazer a utilização:

Para utilizar basta indicar o caminho de seu arquivo.

$ mdlinks ./some/example.md


## Considerações finais:
Esse projeto foi desenvolvido como parte do currículo do Bootcamp Laboratória Brasil, e as tecnologias usadas foram:

* JavaScript
* Node.js
* Eslint
* Jest
* node-fetch
* fs 
* path
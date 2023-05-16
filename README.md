# GitHub User Search

## Descrição

O GitHub User Search é uma aplicação web desenvolvida com React, TypeScript e Jest que permite pesquisar usuários no GitHub e exibir suas informações. A aplicação consome a API pública de pesquisa do GitHub para recuperar os usuários com base no nome de usuário fornecido.

## Capturas de Tela

![Funcionalidades](https://github.com/luizcdribeiro/github-search/assets/44420390/20b780ad-0352-4029-81cf-8c0618488ee7)



## Arquitetura Geral

A aplicação segue uma arquitetura simples baseada em componentes. Os componentes principais são:

- **UserSearch**: Componente responsável por exibir a página principal e permitir a pesquisa de usuários no GitHub.
- **UserDetails**: Componente responsável por exibir informações detalhadas de um usuário específico.
- **Users**: Componente responsável por exibir informações gerais dos usuários.

## Design Patterns

A aplicação utiliza os seguintes padrões de design:

- **Component-Based**: Os componentes são construídos seguindo o padrão de design de componentes reutilizáveis, permitindo uma estrutura modular e escalável.
- **State Management**: O estado da aplicação é gerenciado localmente usando o hook `useState` do React.

## Pacotes Utilizados

A aplicação utiliza os seguintes pacotes adicionais:

- **axios**: Biblioteca para realizar requisições HTTP e fazer chamadas à API do GitHub.
- **Jest**: Framework de testes unitários para JavaScript e TypeScript.
- **Tailwind CSS**: Framework de CSS utilitário para estilizar a aplicação de forma eficiente.

## Instruções de Build

Siga as etapas abaixo para executar a aplicação localmente:

1. Certifique-se de ter o Node.js e o npm ou yarn instalados em sua máquina.
2. Clone o repositório do GitHub User Search.
3. Navegue até o diretório do projeto no terminal.
4. Instale as dependências do projeto executando o comando `npm install` ou `yarn install`.
5. Execute o comando `npm start` ou `yarn start` para iniciar o servidor de desenvolvimento.
6. A aplicação estará disponível em `http://localhost:3000` no seu navegador.

## Testes

Para executar os testes unitários, siga as etapas abaixo:

1. Certifique-se de ter as dependências instaladas (conforme mencionado anteriormente).
2. Navegue até o diretório do projeto no terminal.
3. Execute o comando `npm test` ou `yarn test`.
4. Os testes unitários serão executados e os resultados serão exibidos no terminal.

## Contribuição

Se você quiser contribuir para o GitHub User Search, sinta-se à vontade para enviar um pull request. Ficarei feliz em revisar e incorporar suas contribuições.


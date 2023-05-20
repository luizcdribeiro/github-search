# GitHub User Search

## Descrição

O GitHub User Search é uma aplicação web desenvolvida com React, TypeScript e Jest que permite pesquisar usuários no GitHub e exibir suas informações. A aplicação segue os princípios do Domain-Driven Design (DDD) e SOLID, adotando uma arquitetura em camadas para separar e organizar as responsabilidades.

## Capturas de Tela

![Funcionalidades](https://github.com/luizcdribeiro/github-search/assets/44420390/20b780ad-0352-4029-81cf-8c0618488ee7)



## Arquitetura Geral

A aplicação segue uma arquitetura simples baseada em componentes. Os componentes principais são:

- **Camada de Apresentação**: Responsável pela interface com o usuário, exibição dos componentes visuais e interações com o usuário. Utiliza o React para construir os componentes reutilizáveis, seguindo o padrão Component-Based.
- **Camada de Domínio**: Responsável pela lógica de negócio da aplicação. Contém as regras e operações relacionadas aos usuários do GitHub. Aqui, temos o serviço 
- **Camada de Domínio**: Responsável pela lógica de negócio da aplicação. Contém as regras e operações relacionadas aos usuários do GitHub. Aqui, temos o serviço `UserSearchService` que realiza a busca de usuários no GitHub com base no nome de usuário fornecido.
- **Camada de Repositório:**: Responsável pela persistência de dados e comunicação com a API do GitHub. O repositório `UserRepository` utiliza a biblioteca axios para realizar as requisições HTTP e recuperar os usuários da API.

## Design Patterns

A aplicação utiliza os seguintes padrões de design:

- **Repository**: O padrão Repository é aplicado para lidar com a persistência de dados. O `UserRepository` encapsula as operações de acesso aos dados dos usuários do GitHub.
- **Service**: O padrão Service é utilizado para lidar com a lógica de negócio da aplicação. O `UserSearchService` contém a lógica para buscar os usuários no GitHub e processar os resultados.

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
5. Crie um arquivo .env na raiz do projeto e defina a variável `REACT_APP_BASE_URL` com a base URL da API do GitHub.
6. Execute o comando `npm start` ou `yarn start` para iniciar o servidor de desenvolvimento.
7. A aplicação estará disponível em `http://localhost:3000` no seu navegador.

## Testes

Para executar os testes unitários, siga as etapas abaixo:

1. Certifique-se de ter as dependências instaladas (conforme mencionado anteriormente).
2. Navegue até o diretório do projeto no terminal.
3. Execute o comando `npm test` ou `yarn test`.
4. Os testes unitários serão executados e os resultados serão exibidos no terminal.

## Contribuição

Se você quiser contribuir para o GitHub User Search, sinta-se à vontade para enviar um pull request. Ficarei feliz em revisar e incorporar suas contribuições.


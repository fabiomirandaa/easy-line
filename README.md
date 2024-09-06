# easy-line

Esta é uma simples aplicação de fila de espera para restaurantes. Um CRUD básico para consolidação de conceitos do Angular Moderno e NestJs.

## Como rodar
Necessário ter o Postgres instalado, pois ainda não foi configurado um docker-compose. 
Rodar na primeira vez o comando `npm install`
Para executar, rodar o comando `npm run start`

## Tecnologias Utilizadas

-   Angular (v18)
-   NX (v19)
-   NestJs (v10)
-   RxJS para programação reativa
-   Formulários reativos do Angular
-   Angular Router para navegação
-   HttpClient para comunicação HTTP
-   Bulma
-   TypeORM
-   Postgres

## Coisas necessárias que ainda devem ser desenvolvidas

- Testes Unitários
- Tela visão usuário
- Login simplificado
- Docker Compose para subir a aplicação
- Sistema de autenticação na API
- Melhorar configuração de Linters e Formatadores

## Estrutura do Projeto

-   `*/frontend`: Aplicação Angular.
-   `*/shared`: Biblioteca onde ficam os modelos e qualquer funcionalidade compartilhável.
-   `*/api`: Aplicação NestJs.

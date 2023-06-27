# Projeto de Notícias do Brasil

Este é um projeto de um site de notícias do Brasil, onde os usuários podem visualizar as últimas notícias em diferentes categorias. O projeto utiliza React, Next.js e Tailwind CSS.

## Funcionalidades

- Visualização das últimas notícias do Brasil em diferentes categorias.
- Seleção da categoria de notícias através de uma caixa de seleção.
- Exibição do título da notícia, fonte e link para a notícia completa.
- Estilização do layout semelhante a um blog utilizando Tailwind CSS.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado o Node.js e o npm (ou yarn) em sua máquina.

## Como executar o projeto

1. Faça o clone deste repositório para sua máquina local.
2. Navegue até o diretório do projeto no terminal.
3. Execute o seguinte comando para instalar as dependências:

```shell
npm install
```

ou

```shell
yarn
```

4. Após a instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```shell
npm run dev
```

ou

```shell
yarn dev
```

5. O projeto estará disponível no navegador no endereço `http://localhost:3000`.

## Configuração da API de Notícias

Este projeto consome a API gratuita [News API](https://newsapi.org/) para obter as notícias do Brasil. Para configurar a API, siga as etapas abaixo:

1. Acesse o site da [News API](https://newsapi.org/) e crie uma conta.
2. Após criar a conta, obtenha uma chave de API (API key).
3. No arquivo `services/getNewsByCategory.js`, substitua o valor da constante `API_KEY` pela sua chave de API.

```javascript
const API_KEY = 'sua-chave-de-api';
```

4. Agora você está pronto para usar a API de Notícias em seu projeto.

## Personalização

- Você pode personalizar o estilo do site editando as classes do Tailwind CSS nos componentes `NewsComponent` e `Home`.
- Adicione mais categorias de notícias no componente `Home` e defina os valores correspondentes para a API.
- Explore a documentação do [Tailwind CSS](https://tailwindcss.com/docs) para obter mais opções de estilização e personalização.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou correções, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
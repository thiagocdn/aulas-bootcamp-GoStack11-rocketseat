# Aula 06 - GoBarber Web

Nessa aula, voltamos a desenvolver nossa aplicação. Aqui desenvolvemos a algumas páginas da aplicação web do nosso "GoBarber".

![Imagem](https://github.com/thiagocdn/aulas-bootcamp-GoStack11-rocketseat/blob/master/06-gobarber-web/images/browser_auls06.gif?raw=true)


## Ferramentas utilizadas no projeto

* [React.JS]([https://pt-br.reactjs.org/](https://pt-br.reactjs.org/))
* [Axios](https://github.com/axios/axios)
* [Styled Components](https://styled-components.com/)
* [React-Icons](https://react-icons.github.io/react-icons/)
* [Polished](https://polished.js.org/)
* [Unform](https://github.com/Rocketseat/unform)
* [React Spring](https://www.react-spring.io/)
* [UUIDv4](https://github.com/thenativeweb/uuidv4)
* [Yup](https://github.com/jquense/yup)
* [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

## Ferramentas auxiliares

* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)

## Execução do projeto

#### Requisitos
* Gerenciador de pacotes ([Yarn](https://yarnpkg.com/))
* [Back-end](https://github.com/thiagocdn/aulas-bootcamp-GoStack11-rocketseat/tree/master/04-iniciando-back-end)

**Para executar esse projeto você vai precisar do projeto da [aula 4](https://github.com/thiagocdn/aulas-bootcamp-GoStack11-rocketseat/tree/master/04-iniciando-back-end) rodando*

#### Procedimento
1. Abra um terminal e navegue até a raíz do projeto.
2. Instale as dependências com o comando:
	- yarn
3. Rode o projeto com o comando:
	- yarn start

Caso o projeto não abra automáticamente, abra um browser e acesse:

http://localhost:3000/


# Considerações finais

Nesse projeto foram desenvolvidas 3 páginas:
- Login
- Cadastro
- Dashboard, apenas para referência

As páginas de Login e Cadastro tem válidação de dados, avisos e toasts de notificação, conforme podem ver na animação.

### Atenção

Esse projeto salva os dados de login no LocalStorage do browser, caso queira desfazer o login é necessário apagar esses dados.
Para acessar o Local Storage, siga os passos:
1. Clique com o botão direito do mouse na página
2. Entre na opção "Inspecionar" ou "Inspect"
3. Vá na aba "Aplicação" ou  "Application"
4. No menu esquerdo, acesse "Local Storage"

Caso queira excluir as informações, clique na "Key" "@GithubExplorer[...]' e pressione "del" em seu teclado.



![Imagem](https://github.com/thiagocdn/aulas-bootcamp-GoStack11-rocketseat/blob/master/05-primeiro-projeto-react/images/LocalStorage.png?raw=true)

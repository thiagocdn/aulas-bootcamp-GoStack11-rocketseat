# Aula 03 - Primeiro projecto com Node.JS

Nessa aula começamos a desenvolver o back-end para nossa aplicação final que recebe requisiçes HTTP através do http://localhost:3333/ e, por enquanto, salva os dados em um array do próprio código.

*para rodar esse projeto, instale as libs com o comando **yarn** e rode o projeto com o comando **yarn dev:server***

As requisições aceitas são:

+ **GET** (/appointments) para **listar** todos os agendamentos salvos.

  + A resposta é dada em uma lista de projetos. Como abaixo:
```JSON
[
  {
    "id": "b3b6a347-0ec7-470e-b484-9b0a20f84f47",
    "provider": "Thiago",
    "date": "2020-04-28T11:00:00.000Z"
  }
]
  {
    "id": "ed040e28-b4b7-42b2-889e-3f69afee8902",
    "provider": "Thiago 1",
    "date": "2020-04-28T12:00:00.000Z"
  }
]
```


+ **POST** (/appointments) para **criar** um novo agendamento.

  + Deve-se enviar os dados no corpo da requisição. Como abaixo:

```JSON
{
	"provider": "Thiago 1",
	"date": "{% now 'iso-8601', '' %}"
}
```

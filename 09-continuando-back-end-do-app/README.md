# Aula 09 - Continuando Back-end do App

Inicialmente, mapeamos as funcionalidades  do sistema, no seguintes funcionalidades macro e suas subfuncionalidades (micro):

## Recuperação de senha

**RFs:**

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve pode resetar sua senha;

**RNFs:**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background job);


**RNs:**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário deve confirmar a nova senha escolhida;


## Atualização do perfil

**RFs:**

- O usuário deve poder atualizar seu nome, email e senha;

**RNs:**

- O usuário não pode alterar seu email para um email já cadastrado;
- Para atualizar a senha, o usuário deve informar a senha atual;
- Para atualizar a senha, o usuário deve confirmar a nova senha;

## Painel do prestador

**RFs:**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNFs:**

- Os agendamentos do prestador no dia devem ser armazenados no cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;


**RNs:**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;


## Agendamento de serviços

**RFs:**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNFs:**

- A listagem de prestadores deve ser armazenada em cache;

**RNs:**

- Cada agendamento deve durar exatamente 1h;
- Os agendamentos devem estar disponíveis entre 8h às 18h (último horário às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário no passado;
- O usuário não pode agendar serviços com ele mesmo;



### Legendas:
**RF** - Requisitos funcionais
**RNF** - Requisitos não-funcionais
**RN** - Regras de negócio

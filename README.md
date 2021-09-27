
# Pair Programming Front End Iti

Desafio de frontend do Iti Itaú.

## Importante

- este repositório será baixado durante o pair programming, não é necessário realizar um fork

## Desafio

Em centrais de relacionamentos, as pessoas do atendimento possuem uma ferramenta onde podem solicitar atuação mais profunda em questões com o uso dos sistemas pelo usuário final, como abrir uma reclamação, sugestões, atualizar algum dado ou abrir análises de fraudes.

Pensando em um cenário onde a pessoa pode solicitar uma contestação sobre o uso de sua conta digital, nosso desafio será:

A partir de uma lista de registros, o usuário deve conseguir clicar em um item da lista e abrir uma contestação deste valor.

Para isso, precisamos seguir o fluxo:

- Construir uma tela com a listagem dos débitos da conta do cliente
    - Deixar a lista de débitos clicavel para abrir o fluxo de contestação
- Criar outra tela onde registramos a contestação em si e "enviamos para o backend"

Requisitos funcionais:

- Como usuário, preciso acessar a lista de débitos da conta do cliente, clicar em qualquer valor e ser direcionado para o fluxo de contestação
    - Na lista, preciso receber o valor e data da operação
- No fluxo de contestação, preciso de um formulário para coletar: o que aconteceu (um textarea onde o atendimento descreve o problema), número da ocorrência (um input de número com limite de 9 caracteres e validação para enviar somente números), o botão de enviar
    - O valor a ser contestado já deve estar preenchido
- Quando clicar em enviar, o analista deve receber uma mensagem de sucesso: "solicitação registrada com sucesso"


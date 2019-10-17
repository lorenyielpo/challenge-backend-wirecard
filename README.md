# REST API - Node.js

> REST API - PAYMENT WIRECARD BRASIL

Aplicação backend desenvolvida para teste de admissão da Wirecard Brasil. 


### Ferramentas usadas:
[Node.js](https://nodejs.org/en/)
[Express](https://www.npmjs.com/package/express)
[Nodemon](https://www.npmjs.com/package/nodemon)
[Mongoose](https://www.npmjs.com/package/mongoose)
[MongoDB](https://www.mongodb.com/)
[Body-parser](https://www.npmjs.com/package/body-parser)
[Cors](https://www.npmjs.com/package/cors)

Esta aplicação usa os seguintes métodos <b>CRUD: <i>GET</i> & <i>POST</i></b> 

## Instalação:

Para executar essa instalação você deve ter o Node.js instalado em sua máquina.

```
npm init -y

npm install
```

## Execução:

Para que a aplicação seja excutada, digite o segundo comando:

```
npm start
```


# Rotas da aplicação:

Rota raíz da aplicação:
> http://localhost:3000/

Rota utilizada para fazer <b>GET</b> e <b>POST</b> dos dados:
> http://localhost:3000/payment

Rota utilizada para verificar o status dos pagamentos:
> http://localhost:3000/status/:id

## Dados recebidos no POST:

```
Buyer:
- Name
- Email
- CPF

Payment:
- Amount
- Type
- Card: (Quando o tipo do pagamento é "card") 
    - Card holder name
    - Card number
    - Card expiration date
    - Car cvv
```

## Dados retornados no GET:

```
Client:
 - ID

Buyer:
 - Name
 - Email
 - CPF

Payment:
 - Amount
 - Type
 - Card (when the payment type is credit card)

Card:
 - Card holder name
 - Card number
 - Card expiration date
 - Card CVV (Number behind the card)

```
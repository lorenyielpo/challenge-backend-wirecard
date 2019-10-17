# REST API - Node.js

> REST API - PAYMENT WIRECARD BRASIL

Aplicação backend desenvolvida para teste de admissão da Wirecard Brasil. 


### Ferramentas usadas:
[![made-with-nodejs](https://img.shields.io/badge/Made%20with-Node-1f425f.svg)](https://nodejs.org/en/)
[![Express version shields.io](https://img.shields.io/express/v/ansicolortags.svg)](https://www.npmjs.com/package/express)
[Nodemon](https://www.npmjs.com/package/nodemon)
[Mongoose](https://www.npmjs.com/package/mongoose)
[MongoDB](https://www.mongodb.com/)
[Body-parser](https://www.npmjs.com/package/body-parser)
[Cors](https://www.npmjs.com/package/cors)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)

Esta aplicação usa os seguintes métodos **CRUD: *GET* & *POST*** 

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

Rota utilizada para fazer **GET** e **POST** dos dados:
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

# License
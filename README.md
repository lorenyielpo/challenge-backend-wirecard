# REST API - Node.js

[![made-with-nodejs](https://img.shields.io/badge/Made%20with-Node-1f425f.svg)](https://nodejs.org/en/)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)

> REST API - PAYMENT WIRECARD BRASIL

Aplicação backend desenvolvida para teste de admissão da Wirecard Brasil. Essa aplicação simula uma pequena parte da aplicação de pagamentos desenvolvidas pela Wirecard.


### Ferramentas usadas:

- [Express](https://www.npmjs.com/package/express) - *v. ^4.17.1*
- [Nodemon](https://www.npmjs.com/package/nodemon) - *v. ^1.19.4*
- [Mongoose](https://www.npmjs.com/package/mongoose) - *v. ^5.7.5*
- [MongoDB](https://www.mongodb.com/) - *v. 4.0* 
- [Body-parser](https://www.npmjs.com/package/body-parser) - *v. ^1.19.0*
- [Cors](https://www.npmjs.com/package/cors) - *v. ^2.8.5*


> Esta aplicação usa os seguintes métodos **CRUD: *GET* & *POST*** 

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

## Erros possíveis no POST:

> Email inválido

Retorna status 500, exemplo de erro:
![Email inválido](/img-checkout/invalid-email.png)

> CPF inválido

Retorna status 500, exemplo de erro:
![CPF inválido](/img-checkout/invalid-cpf.png)

> Método de pagamento inválido

Retorna status 500, exemplo de erro:
![Método de pagamento inválido](/img-checkout/invalid-method-payment.png)

> Bandeira de cartão inválida

Retorna status 500, exemplo de erro:
![Bandeira de cartão inválida](/img-checkout/invalid-brand.png)

> Número de cartão inválido

Retorna status 500, exemplo de erro:
![Número de cartão inválido](/img-checkout/invalid-number-card.png)

> Data de expiração inválida

Retorna status 500, exemplo de erro:
![Data inválida](/img-checkout/invalid-date.png)

> CVV inválido
Retorna status 500, exemplo de erro:
![CVV inválido](/img-checkout/invalid-cvv.png)


#### Informações:

* Autora: Loreny Ielpo
* E-mail: lorenyielpo@gmail.com
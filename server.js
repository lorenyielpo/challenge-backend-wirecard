const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const controller = require('./controller/PaymentController');

const logger = (request, response, next) => {
    console.log(`${new Date().toISOString()} Request type: ${request.method} to ${request.originalUrl}`);
  
    response.on('finish', () => {
      console.log(`${response.statusCode} ${response.statusMessage};`);
    })
  
    next();
  }

server.use(bodyParser());
server.use(cors());
server.use(bodyParser.json());
server.use(logger);

server.get('/', (req, res) => {
    res.send('New API').status(200);
});

server.get('/payment', (req, res) => {
    controller.getAll()
    .then(payments => res.send(payments).status(200))
    .catch(error => {
        if (error.name === 'CastError') {
            res.sendStatus(400)
        } else {
            res.sendStatus(500)
        }
    })
})

server.post('/payment', (req, res) => {
    controller.add(req.body)
    .then(payment => res.send(payment).status(200))
    .catch(error => {
        if (error.name === 'ValidationError') {
            res.sendStatus(400);
        } else {  
            res.sendStatus(500);
        }
    })
})

server.get('/status/:id', (req, res) => {
    const id = req.params.id;
    controller.statusPayment(id)
    .then(status => res.send(status).status(200))
    .catch(error => {
        if (error.name === 'CastError') {
            response.sendStatus(400);
        } else {
            response.sendStatus(500);
        }
    })
})

server.listen(PORT);

module.exports = server;
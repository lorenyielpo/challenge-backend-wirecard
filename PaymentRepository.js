const moongose = require('mongoose')
const MONGO_URL = 'mongodb://localhost:27017/payment'

function connect(){
    moongose.connect(MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, error => {
            if(error){
                console.error('Não conectou no mongo')
            } else {
                console.log('Conectado no mongo')
            }
        })
}

module.exports = connect
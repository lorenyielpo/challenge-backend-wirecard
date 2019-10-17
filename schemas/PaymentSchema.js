const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    client: {
        id: { type: mongoose.Schema.Types.ObjectId, auto: true }
    },
    buyer: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        cpf: { type: String, required: true }
    },
    payment: {
        amount: { type: Number, required: true },
        type: { type: String, required: true },
        card: {
            holder_name: { type: String },
            number: { type: String },
            expiration_date: { type: String },
            cvv: { type: String }
        }
    },
    status: {type: String, default: 'Waiting'}
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

const paymentsModel = mongoose.model('clients', paymentSchema)

module.exports = paymentsModel


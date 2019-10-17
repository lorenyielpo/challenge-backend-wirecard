const paymentModel = require('../schemas/PaymentSchema');
const connect = require('../PaymentRepository');

connect()

const processDays = 3

const getAll = () => {
    return paymentModel.find((error, payment) => payment);
}

const add = async (dataPayment) => {
    dataPayment.payment.type = dataPayment.payment.type.toLowerCase();
    const alpha = /[a-z]|[A-Z]/;
    const email = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
    const cpf = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g;
    const brandsCard = /elo|mastercard|visa|maestro|amex|diners|hipercard|discover|aura/i;
    const notNumber = /[^0-9]/;
    const date = new RegExp('(0[1-9]|10|11|12)/20[0-9]{2}$');

    if (dataPayment.buyer.email === null || email.test(dataPayment.buyer.email) !== true) {
        throw new Error('Invalid e-mail');
    }

    if (cpf.test(dataPayment.buyer.cpf) !== true || dataPayment.buyer.cpf === null || dataPayment.buyer.cpf.search(alpha) !== -1 || dataPayment.buyer.cpf.length !== 11 || notNumber.test(dataPayment.buyer.cpf) !== false) {
        throw new Error('Invalid CPF');
    }

    if (dataPayment.payment.type !== "boleto" && dataPayment.payment.type !== "card") {
        throw new Error('Invalid payment method');
    }

    if (dataPayment.payment.type === "boleto") {

        if (dataPayment.payment.card.holder_name !== undefined || dataPayment.payment.card.number !== undefined || dataPayment.payment.card.expiration_date !== undefined || dataPayment.payment.card.cvv !== undefined) {
            
            dataPayment.payment.card.holder_name = undefined;
            dataPayment.payment.card.number = undefined;
            dataPayment.payment.card.expiration_date = undefined;
            dataPayment.payment.card.cvv = undefined;
        }


        dataPayment.status = 'Processing';
        const client = new paymentModel(dataPayment);
        client.save();

        const numberBoleto = `07790000.00116  ${Math.floor(Math.random() * 100)}000.000${Math.floor(Math.random() * 1000)} 0${Math.floor(Math.random() * 10000)}.${Math.floor(Math.random() * 1000000)} ${Math.floor(Math.random() * 10)} ${Math.floor(Math.random() * 10000)}000000${Math.floor(Math.random() * 10)}000`;
        return numberBoleto;
    }


    if (dataPayment.payment.type === "card") {

        if (dataPayment.payment.card.holder_name === null || dataPayment.payment.card.holder_name === "" || brandsCard.test(dataPayment.payment.card.holder_name) !== true) {
            throw new Error('Invalid card');
        }

        if (dataPayment.payment.card.number === null || dataPayment.payment.card.number === "" || dataPayment.payment.card.number.search(alpha) !== -1 || dataPayment.payment.card.number.length !== 16) {
            throw new Error('Invalid card');
        }

        if (dataPayment.payment.card.expiration_date === null || dataPayment.payment.card.expiration_date === "" || dataPayment.payment.card.expiration_date.search(alpha) !== -1 || date.test(dataPayment.payment.card.expiration_date) !== true) {
            throw new Error('Invalid card');
        }

        if (dataPayment.payment.card.cvv === null || dataPayment.payment.card.cvv === "" || dataPayment.payment.card.cvv.search(alpha) !== -1 || dataPayment.payment.card.cvv.length != 3) {
            throw new Error('Invalid card');
        }

        dataPayment.payment.type = type;
        dataPayment.status = 'Successful';
        const client = new paymentModel(dataPayment);
        client.save();
        return dataPayment.status;
    }
}

const statusPayment = async (id) => {
    const client = await paymentModel.findById(id);

    if (client.payment.type === "boleto") {
        const timestamp = new Date(client.created_at);
        const nowDate = new Date();
        const differenceTime = nowDate.getDay() - timestamp.getDay();

        if (differenceTime > processDays) {
            const newStatus = await paymentModel.findByIdAndUpdate(
                id,
                { $set: { status: 'Successful' } },
                { new: true },
            )

            newStatus.save();
        }
    }

    return client.status;
}

module.exports = {
    getAll,
    add,
    statusPayment
}
const mongoose = require('../../config/db'); // Importa o arquivo de configuração do banco de dados
const { _id: id } = require('./accountModel');

const CardSchema = mongoose.Schema(
  {
    // account_id: {
    //   type: Number,
    //   required: true,
    // }, // Vai puxar o id da conta e vincular o cartão a conta
    cardName: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
    },
    cardExpire: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
); // Configuração dos dados que vão para o banco de dados através do Schema da biblioteca mongoose

CardSchema.pre('save', async function (next) {
  function CardNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  this.cardNumber = `**** **** **** ${CardNumber(1, 10000)}`;
  next();
});

const Card = mongoose.model('Card', CardSchema); // Cria o modelo a partir da configuração
module.exports = Card; // Exporta o modelo

// Modelo incial para abstração.

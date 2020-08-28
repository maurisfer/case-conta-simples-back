const mongoose = require('../../config/db'); // Importa o arquivo de configuração do banco de dados
// const { _id: id } = require('./accountModel');

const CardSchema = mongoose.Schema(
  {
    account_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    }, // Vai puxar o id da conta e vincular o cartão a conta (Verificando)
    cardName: {
      type: String,
      required: true,
    }, // Dado pelo emissor do cartão no momento da geração
    cardNumber: {
      type: String,
    }, // Gerado automaticamente quando o cartão é criado
    cardExpire: {
      type: String,
    }, // Mês e ano de vencimento do cartão
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
  } // Função que cria aletoriamento os 4 ultimos digitos do cartão
  this.cardNumber = `${CardNumber(1, 10000)}`; // Atruição do resultado da função ao cardNumer
  next();
  const myDate = new Date();
  this.cardExpire = `${myDate.getMonth() + 1}/${myDate.getFullYear() + 5}`; // Gambiarra provisória de exemplo de manipulação dasdatas de foma automática
});

const Card = mongoose.model('Card', CardSchema); // Cria o modelo a partir da configuração
module.exports = Card; // Exporta o modelo

// Modelo incial para abstração.

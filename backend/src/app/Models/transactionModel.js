const mongoose = require('../../config/db'); // Importa o arquivo de configuração do banco de dados

const TransactionSchema = mongoose.Schema(
  {
    card_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    cardNumber: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: false,
    }, // Recebe a data da transação
    month: {
      type: String,
      required: false,
    },
    operatorName: {
      type: String,
      required: true,
    }, // Recebe o nome do estabelecimento operador da transação de crédito/débito
    value: {
      type: Number,
      required: true,
    }, // Sempre receberá um valor positivo, em caso de débito verificar como convertê-lo para negativo
    operationId: {
      type: Number,
      required: true,
    }, // Recebe 0 para débito e 1 para crédito
  },
  {
    timestamps: true,
  }
); // Configuração dos dados que vão para o banco de dados através do Schema da biblioteca mongoose

// TransactionSchema.pre('save', async function (next) {
//   const myDate = new Date();
//   this.month = `${myDate.getMonth() + 1}`;
//   this.date = `${myDate.getDate().toLocaleString('pt-br')}/${this.month}/${myDate.getFullYear()}`; // Gambiarra provisória para criação e manipulação da data da operação
//   next();
// });

const Transaction = mongoose.model('Transaction', TransactionSchema); // Cria o modelo a partir da configuração
module.exports = Transaction; // Exporta o modelo

// Modelo incial para abstração.

const mongoose = require('../../config/db'); // Importa o arquivo de configuração do banco de dados

const AccountSchema = mongoose.Schema(
  {
    enterpriseName: {
      type: String,
      required: true,
    }, // Nome da empresa
    enterpriseID: {
      type: String,
      required: true,
    }, // CNPJ
    email: {
      type: String,
      required: true,
    }, // E-mail do gestor da conta
    password: {
      type: Number,
      required: true,
    }, // Requer validação no Controller e ocultação em hash
    accountNumber: {
      type: String,
      required: false,
    }, // Gerado automaticamente o numero da conta
  },
  {
    timestamps: true,
  }
); // Configuração dos dados que vão para o banco de dados através do Schema da biblioteca mongoose
AccountSchema.pre('save', async function (next) {
  function accNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  } // Função que gera o numero aleatório para a conta bancária
  this.accountNumber = `${accNumber(1, 10000000) - accNumber(1 - 10)}`; // Atribui o resultado da função ao accountNumber
  next();
});

const Account = mongoose.model('Account', AccountSchema); // Cria o modelo a partir da configuração
module.exports = Account; // Exporta o modelo

// Modelo incial para abstração.

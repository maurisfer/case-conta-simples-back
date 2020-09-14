const bcrypt = require('bcryptjs'); //  Importa biblioteca de criptografia
const mongoose = require('../../config/db'); // Importa o arquivo de configuração do banco de dados

const AccountSchema = mongoose.Schema(
  {
    enterpriseName: {
      type: String,
      required: true,
    },
    enterpriseID: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
AccountSchema.pre('save', async function (next) {
  function accNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  this.accountNumber = `${accNumber(1, 10000000)}-${accNumber(1, 10)}`;
  const hashPass = await bcrypt.hash(this.password, 10);
  this.password = hashPass;
  next();
});

const Account = mongoose.model('Account', AccountSchema); // Cria o modelo a partir da configuração
module.exports = Account;

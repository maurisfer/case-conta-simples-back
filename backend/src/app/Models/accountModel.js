const mongoose = require('../../config/db'); // Importa o arquivo de configuração do banco de dados

const AccountSchema = mongoose.Schema(
  {
    _id: {
      type: Number,
      reqired: true,
    }, // Aqui na hora de gerar verificar como gerar numeros aleatórios de 1 a 1000 a titulo de exemplo
    enterpriseName: {
      type: String,
      required: true,
    },
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
    },
    accountNumer: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
); // Configuração dos dados que vão para o banco de dados através do Schema da biblioteca mongoose
ccountSchema.pre('save', async function (next) {
  // Aqui gerar um código para que antes de salvar o numero da conta seja igual ao if do banco de dados
});

const Account = mongoose.model('Account', AccountSchema); // Cria o modelo a partir da configuração
module.exports = Account; // Exporta o modelo

// Modelo incial para abstração.

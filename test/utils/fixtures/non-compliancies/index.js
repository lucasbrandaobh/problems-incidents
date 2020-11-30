const Chance = require('chance');
const { ObjectId } = require('../../../../lib/database');

const chance = new Chance();

module.exports = {
  create: (data = {}) => {
    const nonCompliancies = {};

    nonCompliancies.descricao = data.descricao || chance.word();
    nonCompliancies.causaOrigem = data.causaOrigem || chance.word();
    nonCompliancies.area = data.area || chance.word();
    nonCompliancies.dataCadastro = data.dataCadastro || new Date();
    nonCompliancies.id_produto = data.id_produto || chance.hash({ length: 24 });
    nonCompliancies.id_usuarioCadastro = data.id_usuarioCadastro || chance.hash({ length: 24 });
    nonCompliancies.id_usuarioResponsavel = data.id_usuarioResponsavel || chance.hash({ length: 24 });
    nonCompliancies.tratativa = data.tratativa || {
      tipo: data.tipo || chance.word(),
      descricao: data.descricao || chance.word(),
      dataInicio: data.dataInicioTratativa || new Date(),
      dataConclusao: data.dataConclusaoTratativa || new Date()
    };
    return nonCompliancies;
  }
};

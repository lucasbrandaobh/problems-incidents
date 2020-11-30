const repository = require('./repository');

const naoConformidadesController = (() => {
  const get = async (req, res) => {
    try {
      const naoConformidades = await repository.find().toArray();
      res.json(naoConformidades);
    } catch (error) {
      console.error('Erro ao chamar função get de naoConformidades. %o', error);
      res.sendStatus(500);
    }
  };
  const getById = async (req, res) => {
    try {
      const { params } = req;
      const naoConformidades = await repository.findOne({ _id: params.idNc });
      res.json(naoConformidades);
    } catch (error) {
      console.error('Erro ao chamar função getByid de naoConformidades. %o', error);
      res.sendStatus(500);
    }
  };
  const post = async (req, res) => {
    const { body } = req;
    try {
      const resultInsert = await repository.insertOne(body);
      const naoConformidadesInserido = resultInsert.ops[0];
      console.log('------------------------------------------------------------------');
      console.log('Não conformidade incluida com sucesso');
      res.status(201).send(naoConformidadesInserido);
    } catch (error) {
      console.error('Erro ao chamar função post de naoConformidades. %o', error);
      res.sendStatus(500);
    }
  };
  const put = async (req, res) => {    
    const { body, params } = req;
    console.log(body)
    try {
      const resultUpdate = await repository.updateOne(body, params.idnc);
      console.log('------------------------------------------------------------------');
      console.log('Não conformidade alterada com sucesso');
      res.sendStatus(200);
    } catch (error) {
      console.error('Erro ao chamar função put de naoConformidades. %o', error);
      res.sendStatus(500);
    }
  };
  const remove = async (req, res) => {
    try {
      const { params } = req;
      await repository.deleteOne(params.idnc);
      res.json();
    } catch (error) {
      console.error('Erro ao chamar função delete de naoConformidades. %o', error);
      res.sendStatus(500);
    }
  };
  return {
    get,
    getById,
    post,
    put,
    remove
  };
})();

module.exports = naoConformidadesController;

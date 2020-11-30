const { getCollection, ObjectId } = require('../database');

const COLLECTION_NAME = 'naoConformidades';

const naoConformidadesRepository = (() => {
  const find = (filter = {}, options = {}) => getCollection(COLLECTION_NAME).find(filter, options);
  const findOne = (filter = {}) => {
    if(filter._id) {
      filter._id = ObjectId(filter._id);
    }
    return getCollection(COLLECTION_NAME).findOne(filter);
  };
  const insertOne = (naoConformidade) => getCollection(COLLECTION_NAME).insertOne(naoConformidade);
  const updateOne = (naoConformidade, id) => {
    if(id) {
      id = ObjectId(id);
    }
    const update = {
      $set: { ...naoConformidade }
    };
    return getCollection(COLLECTION_NAME).updateOne({ _id: id }, update);
  };
  const deleteOne = (id) => {
    console.log(id)
    if(id) {
      id = ObjectId(id);
    }
    return getCollection(COLLECTION_NAME).deleteOne({ _id: id });
  };

  return {
    find,
    findOne,
    insertOne,
    updateOne,
    deleteOne
  };
})();

module.exports = naoConformidadesRepository;

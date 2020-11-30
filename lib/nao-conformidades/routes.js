const controllers = require('./controllers');
const { isAuthenticated } = require('../authorization/authorization-bearer-strategy');

const naoConformidadesRoutes = (router) => {
  router.get('/nao-conformidades', isAuthenticated, controllers.get);
  router.get('/nao-conformidades/:idNc', isAuthenticated, controllers.getById);
  router.post('/nao-conformidades', isAuthenticated, controllers.post);
  router.put('/nao-conformidades/:idnc', isAuthenticated, controllers.put);
  router.delete('/nao-conformidades/:idnc', isAuthenticated, controllers.remove);
};

module.exports = naoConformidadesRoutes;
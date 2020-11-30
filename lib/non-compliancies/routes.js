const controllers = require('./controllers');
const { isAuthenticated } = require('../authorization/authorization-bearer-strategy');

const nonComplianciesRoutes = (router) => {
  router.get('/non-compliancies', isAuthenticated, controllers.get);
  router.get('/non-compliancies/:idNc', isAuthenticated, controllers.getById);
  router.post('/non-compliancies', isAuthenticated, controllers.post);
  router.put('/non-compliancies/:idnc', isAuthenticated, controllers.put);
  router.delete('/non-compliancies/:idnc', isAuthenticated, controllers.remove);
};

module.exports = nonComplianciesRoutes;
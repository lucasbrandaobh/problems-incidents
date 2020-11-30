const request = require('supertest');
const { assert } = require('chai');
const { dropCollections } = require('../database/drop-collection');
const { getCollection } = require('../../lib/database');
const Server = require('../../lib/server');
const { fixtures } = require('../utils')

const instanceServer = new Server();
const token = 'senha';

describe('Não Conformidades: Testes funcionais', () => {
  let app;
  before(async () => {
    instanceServer.defineConfig();
    ({ app } = instanceServer);
  });
  after(async () => {
    await instanceServer.stop();
  });
  afterEach(async () => {
    await dropCollections(['nonCompliancies']);
  });
  it('GET 200, Obter não conformidades da base com sucesso.', async () => {
    const nonCompliancies = fixtures.nonCompliancies.create();
    await getCollection('nonCompliancies').insertOne(nonCompliancies);
    const { body, statusCode } = await request(app)
      .get('/non-compliancies')
      .set('authorization', `bearer ${token}`)
    assert.strictEqual(statusCode, 200);
    assert.strictEqual(body.length, 1);
  });
  it('POST 201, Inserir conformidades na base com sucesso.', async () => {
    const nonCompliancies = fixtures.nonCompliancies.create();
    const { body, statusCode } = await request(app)
      .post('/non-compliancies')
      .send(nonCompliancies)
      .set('authorization', `bearer ${token}`)
    assert.strictEqual(statusCode, 201);
  });
});

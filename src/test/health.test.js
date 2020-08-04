const request = require('supertest');
const server = require('../server');

describe('Health', async () => {

  it('Health', async () => {
    const res = await request(server).get('/api/v1/health');
    expect(res.statusCode).toEqual(200);
  });

});
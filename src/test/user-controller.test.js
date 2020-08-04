const request = require('supertest');
const server = require('../server');

const User = require('../app/models/user');

describe('USERS INTEGRATION TEST', async () => {

  it('LIST ALL USERS AND RECEIVES STATUS CODE 200', async () => {
    const res = await request(server).get('/api/v1/users');
    expect(res.statusCode).toEqual(200);
  });

});
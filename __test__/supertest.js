const app = require('../server/server');
const request = require('supertest')(app);
const expect = require('chai').expect;
const chai = require('chai');
const userController = require('../server/controller/userController');
const { PrismaClient } = require('@prisma/client');

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
  describe('/signup', () => {
    describe('POST', () => {
      it('successfuly adds a user to the database', () => {
        const query = {
          "username" : "bob",
          "password" : "bob1"
        };
        return request
          .post('/signup')
          .set('Content-type', 'application/json')
          .send( query )
          .expect(200);
      })
    })
  })
});

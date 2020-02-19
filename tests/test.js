var request = require('supertest');

describe('GET /', function () {
    it('respond with hello world', function (done) {
        //navigate to root and check the the response is "hello world"
        request(`http://localhost:3000`).get('/hello').expect('hello world', done);
    });
});
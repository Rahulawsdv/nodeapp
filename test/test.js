var request = require('supertest');
var app = require('../index.json');describe('GET /', function() {
 it('respond with hello world', function(done) { //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('hello JOCKER', done);
 });
});

var Lab             = require('lab');
var lab             = exports.lab = Lab.script();
var Code            = require('code');
var server          = require('../../');

lab.experiment('Test Users API, ', function() {
    //
    // Test get a user on firebase
    lab.test('GET user on firebase without logging in should return 401: unauthorized.', function(done) {
        var options = {
            method: 'GET',
            url: '/api/v1/user/3ac95b1b-b59b-40c5-801e-b02296f4a22b'
        };

        server.inject(options, function(response) {
            var result = response.result;

            Code.expect(response.statusCode).to.equal(401);
            Code.expect(result).to.be.instanceof(Object);
            Code.expect(result.data).to.have.length(0);

            done();
        });
    });

    //
    // Test posting 1 user on firebase
    lab.test('POST new user, without logging in, should return 401 unauthorized.', function(done) {
        var options = {
            method: 'POST',
            url: '/api/v1/user',
            payload: {id:4,name: 'Willmer',age:30}
        };

        server.inject(options, function(response) {
            var result = response.result;

            Code.expect(response.statusCode).to.equal(401);
            Code.expect(result).to.be.instanceof(Object);
            // Code.expect(result).to.have.length(3);

            done();
        });
    });
});

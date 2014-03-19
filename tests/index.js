var JSONStream = require('../');

var stream = new JSONStream();

module.exports = {
    "first write prepends [": function (test) {
        test.expect(2);
        stream.once('data', function (data) {
            test.equal(String(data), '[');
            stream.once('data', function (data) {
                test.equal(String(data), '"foo"');
                test.done();
            });
        });
        stream.write("foo");
    },
    "subsequent non-null writes prepend ,": function (test) {
        test.expect(2);
        stream.once('data', function (data) {
            test.equal(String(data), ',');
            stream.once('data', function (data) {
                test.equal(String(data), '"bar"');
                test.done();
            });
        });
        stream.write("bar");
    },
    "on source end stream sends ]": function (test) {
        test.expect(1);
        stream.once('data', function (data) {
            test.equal(String(data), ']');
            test.done();
        });
        stream.end();
    },
    "source end without data sends []": function (test) {
        var stream = new JSONStream();
        test.expect(1);
        stream.once('data', function (data) {
            test.equal(String(data), '[]');
            test.done();
        });
        stream.end();
    }
};
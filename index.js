var stream  = require('stream');
var util    = require('util');

function JSONStream() {
    stream.Transform.call(this, {objectMode: true});
}
util.inherits(JSONStream, stream.Transform);

JSONStream.prototype._transform = function (instance, __, done) {
    // if we've already started the stream, prefix a comma
    // if we haven't, prefix with a [ to start the array
    if (this.started) {
        this.push(',');
    } else {
        this.push('[');
        this.started = true;
    }
    // you can do whatever you need to do with the model
    // here, and then when you're finished
    // write the stringified model object
    if (instance != null) {
        this.push(JSON.stringify(instance));
    } else {
        this.push('');
    }
    done();
};


// end the json array
JSONStream.prototype._flush = function (done) {
    if (!this.started) {
        this.push('[]');
    } else {
        this.push(']');
    }
    done();
};

module.exports = JSONStream;
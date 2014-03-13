simple-jsonstream
=================

A simple transform stream to output a valid JSON array


**Need to output a stream of objects as a JSON array?**

```javascript
var JSONStream = require('simple-jsonstream');

var jsonStream = myAwesomeObjectStream.pipe(new JSONStream());

// In hapi route handler
reply(jsonStream).type('application/json');

// In express
res.setHeader('content-type', 'application/json');
jsonStream.pipe(res);
```

Acknowledgements:

This approach was mostly borrowed from a gist by [@nlf](https://github.com/nlf)

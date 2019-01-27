var proxy = require('express-http-proxy');
var app = require('express')();
 
app.use('/couch', proxy(process.env.COUCHDB_URL));

const port = 3000

app.get('/', (req, res) => res.send(`OK`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
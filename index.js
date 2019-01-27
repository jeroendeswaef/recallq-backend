var proxy = require('express-http-proxy');
var app = require('express')();
 
app.use('/couch', proxy(process.env.COUCHDB_URL));

const port = 3000

app.get('/', (req, res) => res.send(`OK`))
app.get('/info', (req, res) => res.send(`${process.env.COUCHDB_USER.length} - ${process.env.COUCHDB_PASSWORD.length}`))

app.listen(port, () => console.log(`App listening on port ${port}!`))
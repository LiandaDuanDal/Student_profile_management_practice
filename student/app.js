// import http module
const http = require('http');
// the '.js' trail can be ignore
// Since we don't export anything in connect.js,
// we don't need to let a var to receiced anything here.
require('./model/connect.js');
const Student = require('./model/user.js');
// =========================================
// create web server
const app = http.createServer()

// when client access the server response:
app.on('request', (req, res) => {
    console.log('xxxx');
    res.end('connnnnnnnn')
})
// listen the applicaiton port
app.listen(80);
console.log('connected successfully!');
// >nodemon app.js


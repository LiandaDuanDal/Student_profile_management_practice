// import http module
const http = require('http')
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
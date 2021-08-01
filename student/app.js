// import http module
const http = require('http');
// get template engine
const template = require('art-template');
// get path module
const path = require('path');
// start static resource access service
const serveStatic = require('serve-static');
// it return a method which will be used later
const serve = serveStatic(path.join(__dirname, 'public'));
// imoprt query string
const queryString = require('querystring');
// import date processing package
const dateformat = require('dateformat');
// 
// import router
const router = require('./route/index.js');

// =========================================
console.log("============important info============");
console.log("static resources dir:", path.join(__dirname, 'public'));
console.log("=================END==================");
// =========================================
// configure the root directory of the template
// Only need to write the name of the template now!
// .imports.dateformat the trail name dateformate is a customized method name 
template.defaults.root = path.join(__dirname, 'views');
// import dataformat into the template
template.defaults.imports.dateformat = dateformat;

// test the router
// render add page

// the '.js' trail can be ignore
// Since we don't export anything in connect.js,
// we don't need to let a var to receiced anything here.
require('./model/connect.js');
const Student = require('./model/user.js');
// =========================================
// create web server
const app = http.createServer()

// when client access the server response:
// app.on('request', (req, res) => {
//     console.log('xxxx');
//     res.end('connnnnnnnn')
// })
app.on('request', (req, res) => {
    router(req, res, () => {
        console.log("I AM CALLED AFTER THE router(req, res) IS CALLED !!!");
    });
    serve(req, res, () => {
        console.log(" static resource accessing......");
    });
})
// listen the applicaiton port
app.listen(80);
console.log('connected successfully!');
// >nodemon app.js


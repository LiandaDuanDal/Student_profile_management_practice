// import http module
const http = require('http');
// import router module
const getRouter = require('router');
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
// =========================================
console.log("============important info============");
console.log("static resources dir:", path.join(__dirname, 'public'));

console.log("=================END==================");
// =========================================
// configure the root directory of the template
// Only need to write the name of the template now!
template.defaults.root = path.join(__dirname, 'views');

// get router obj
const router = getRouter();
// test the router
// render add page
router.get('/add', (req, res) => {
    // res.end('test');
    console.log("accessing =====> /add");
    let html = template('index.art', {});

    res.end(html);
});
// render student list page
router.get('/list', (req, res) => {
    console.log("accessing =====> /list");
    // res.end('index');
    let html = template('list.art', {});
    res.end(html)
});
// ==============POST===================
router.post('/add', (req, res) => {
    // receive post request
    let formData = '';
    // begin to receive parameter
    req.on('data', param => {
        console.log("collecting data===>", param, "~~~~~>", formData);
        formData += param;
    });
    // endign receiving data
    req.on('end', async () => {
        console.log(queryString.parse(formData));
        // add data to the database
        await Student.create(queryString.parse(formData));
        // res.end('abc');
        res.writeHead(301, {
            Location: '/list'
        });
        res.end();
    })
})



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


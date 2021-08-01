// import http module
const http = require('http');
// get template engine
const template = require('art-template');
// import router module
const getRouter = require('router');
// get path module
const path = require('path');
// start static resource access service
const serveStatic = require('serve-static');
// it return a method which will be used later
// 此时如果index.art 和 list.art要找css文件就回去public下找css文件夹
const serve = serveStatic(path.join(__dirname, 'public'));
// imoprt query string
const queryString = require('querystring');
// import date processing package
const dateformat = require('dateformat');
// =========================================
const Student = require('../model/user.js');
// get router obj
const router = getRouter();

router.get('/add', (req, res) => {
    // res.end('test');
    console.log("accessing =====> /add");
    let html = template('index.art', {});
    res.end(html);
});
// render student list page
// 只有将函数通过async编程异步函数，才能够使用await来接收异步api返回的结果
router.get('/list', async (req, res) => {
    console.log("accessing =====> /list");
    // res.end('index');

    // find
    let students = await Student.find();
    console.log("Student.find()====>");
    console.log(students);
    // 
    let html = template('list.art', {
        students: students
    })
    // let html = template('list.art', {});
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

module.exports = router;




// import mongoose databse module
const mogoose = require('mongoose');
// connect to the database
mogoose.connect("mongodb://localhost/playground")
    .then(() => { console.log("@@@@@Connected to the databse@@@@@") })
    .catch(() => { console.log("*****failed to connect to the database*****") });
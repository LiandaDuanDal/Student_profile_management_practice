// import mongoose databse module
const mogoose = require('mongoose');
// connect to the database
// then---execute for successful connect
// catch--execute when fail to connect to the server
mogoose.connect("mongodb://localhost/playground")
    .then(() => { console.log("@@@@@Connected to the databse@@@@@") })
    .catch(() => { console.log("*****failed to connect to the database*****") });
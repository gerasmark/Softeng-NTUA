const mongoose = require("mongoose");
const app = require('./app');

//const chalk = require("chalk");

const port = process.env.SERVER_PORT || 9103;

app.listen(port, () => {
    console.log( `Server running on port ${port}`) ;
});
//require the library
const mongoose = require("mongoose");

//import { connect, connection } from 'mongoose';

//if faild to connect

//connect to databas
mongoose.connect(
  "mongodb+srv://vachnaram:Vachna123@cluster0.rvepl.mongodb.net/?retryWrites=true&w=majority"
);
//mongoose.connect('mongodb+srv://vachnaram:ejkCz467C8X15ZaX@cluster0.rvepl.mongodb.net/user_db?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
//console.log(db);

db.on("error", console.error.bind(console, "error connecting to db"));

db.once("open", function () {
  console.log("sucessfully connected to the databases");
});
module.exports = db;

// exports.user_db = function(req, res) {
//     res.render('user_db');
// };

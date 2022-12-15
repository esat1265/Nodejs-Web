// Mysql ile baglanti kuralim
const mysql = require("mysql2");
const config = require("../config");

// baglanti yaptik
let connection = mysql.createConnection(config.db);


connection.connect(function(err){
    if (err) {
        console.log(err);
    } 
    console.log("mysql baglantisi saglandi");
});

module.exports = connection.promise();
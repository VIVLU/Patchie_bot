//mysql helper
const fs = require("fs");
const mysql = require("mysql");

fs.readFile("../databaseSecrets.txt",function(err,secrets){
	const con = mysql.createConnection(JSON.parse(secrets));
});

function query(q,callback){
	con.connect(function(err) {
		if (err) console.log(err);
		con.query(q, function (err, result) {
			if (err) console.log(err);
			callback(result);
		});
	});
}

module.exports = {
	"query":query
}
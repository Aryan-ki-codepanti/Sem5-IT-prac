var mysql = require("mysql");
var express = require("express");
var parser = require("body-parser");
const bodyParser = require("body-parser");

// DB Company
// Student table
// 1. username
// 2. course
// 3. email
// 4. password as it is

var DB = "COMPANY";
var TABLE = "STUDENT";
var PORT = 8080;

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: DB
});

var app = express();
app.use(express.json());

app.get("/student/signin", function (req, res) {
    var data = req.body;

    conn.connect(function (err) {
        if (err) throw err;
        console.log("Connected");

        conn.query("SHOW TABLES", function (err, res) {
            if (err) {
                console.log("Error while running");
                return;
            }
            console.log(res);
        });
        conn.end();
    });

    res.json({
        message: "Hi signed in"
    });
});

app.listen(PORT, function () {
    console.log("Server running");
});

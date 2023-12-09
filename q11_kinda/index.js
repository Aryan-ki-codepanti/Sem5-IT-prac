const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const app = express();
const port = 3000;
// Replace with your MySQL database credentials
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "userdb"
});
// Connect to MySQL
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log("Connected to MySQL");
});
// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve static files (like HTML)
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/prac11.html");
});
// Sign In endpoint
app.post("/signin", (req, res) => {
    const { usernameSignIn, passwordSignIn } = req.body;
    console.log(usernameSignIn, passwordSignIn);
    // You should perform proper validation and sanitation here
    const sql = `SELECT * FROM users WHERE username='${usernameSignIn}' AND password
='${passwordSignIn}'`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length > 0) {
            // Successful Sign In
            res.send(`Welcome, ${usernameSignIn}!`);
        } else {
            // Invalid credentials
            res.send("Invalid username or password");
        }
    });
});
// Sign Up endpoint
app.post("/signup", (req, res) => {
    const { usernameSignUp, passwordSignUp } = req.body;
    console.log(usernameSignUp, passwordSignUp);
    // You should perform proper validation and sanitation here
    const sql = `INSERT INTO users (username, password) VALUES ('${usernameSignUp}',
'${passwordSignUp}')`;
    db.query(sql, err => {
        if (err) {
            throw err;
        }
        // Successful Sign Up
        res.redirect("/");
    });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

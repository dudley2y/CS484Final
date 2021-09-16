const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const sqlite3 = require("sqlite3")
const bcrypt = require('bcrypt');
const passport = require("passport");
const initPassport = require("./passport-config.js");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var db = new sqlite3.Database('./test.db')

app.post('/login', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const sqlSearch = `SELECT * FROM userLogin WHERE username = ?;`
    db.get(sqlSearch,[username], (err,row) => {
        if(row == null){ res.send("No user found")} // doesn't exist
        bcrypt.compare(password, row.password, function(err,result){
            res.send("Authenticated: " + result)
        })
    });
});

app.post('/register', (req,res) =>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    console.log("RECIEVED: ",name, username, password)

    const sqlSearch = `SELECT * FROM userLogin WHERE username = ?;`

    db.get(sqlSearch, [username], (err, row) => {
        if(row!=null){ 
            res.send("user already exists") 
            return
        }
    });

    bcrypt.hash(password, 10, function(err, hash){
        if(err){
            return err;
        }
        console.log("Created hash: ",hash)
        const sqlQuery = `INSERT INTO userLogin(name, username, password) VALUES("${name}", "${username}", "${hash}");`
        db.run(sqlQuery)
        return hash
    });
});

app.listen(5000, () => {
    console.log("WELCOME TO MY FINAL WEBSITE wowoowoo")
})

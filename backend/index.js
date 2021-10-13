const express = require("express");
const cors = require('cors')
const passport = require("passport");
const LocalStrategy =  require("passport-local").Strategy;
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt');
const session = require('express-session')
const bodyParser = require('body-parser');
const sqlite3 = require("sqlite3")

const app = express();

//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser("secret"))


app.use(passport.initialize());
app.use(passport.session())

var db = new sqlite3.Database('./test.db')

passport.serializeUser(function(user, done) {
    done(null, user.username);
  });
  
passport.deserializeUser(function(id, done) {
    const sqlSearch = `SELECT * FROM userLogin WHERE username = ?;`
    db.get(sqlSearch, [id], (err,row) => {
        done(null, row)
    })
});

passport.use(new LocalStrategy(
    function(username, password, done){
        const sqlSearch = `SELECT * FROM userLogin WHERE username = ?;`
        db.get(sqlSearch,[username], (err,row) => {
            // user isn't found in database
            if(row == null){ return done(null, false, { message: "No user with that email"})} 
            else{  // we found user in database
                bcrypt.compare(password, row.password, function(err,result){
                    if(result){ // password matches
                        return done(null, row)
                    }
                    else{
                        return done(null, false, {message: "Password inccorect"})
                    }
                })
            } 
        });
    }
));


app.post('/login', passport.authenticate('local'), (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.send("Logged in")
  });

app.post('/register', (req,res) =>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    console.log("RECIEVED: ",name, username, password, " from register")

    // search to see if user already exists in databsae
    const sqlSearch = `SELECT * FROM userLogin WHERE username = ?;`

    db.get(sqlSearch, [username], (err, row) => {
        if(row!=null){   // user already exists
            console.log("user already exists")
            res.send("user already exists") 
        }else{          // user doesn't exist so we add to database
            bcrypt.hash(password, 10, function(err, hash){
                if(err){
                    console.log(err)
                    return res.sendStatus(500)
                }

                console.log("Created hash: ",hash)
                const sqlQuery = `INSERT INTO userLogin(name, username, password) VALUES("${name}", "${username}", "${hash}");`
                db.run(sqlQuery)

                const user = { "username": username, "password":hash, "name": name}

                req.login(user, (err) => {
                    if(err){ return res.send(err)}
                    else{ return res.send("Success")}
                });
            });
        }
    });
});

app.post('/user', (req,res) => {
    if (req.isAuthenticated()) {
        res.send(req.user.username)
    }else{
        res.send("Cookie is invalid" )
    }
})

app.listen(5000, () => {
    console.log("WELCOME TO MY FINAL WEBSITE wowoowoo")
})

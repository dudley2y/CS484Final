const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const sqlite3 = require("sqlite3")
const bcrypt = require('bcrypt');
const passport = require("passport");
const LocalStrategy =  require("passport-local");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize());

var db = new sqlite3.Database('./test.db')

passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(user, done) {
    done(null, user);
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
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.send(req.user);
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
            res.send("user already exists") 
        }else{          // user doesn't exist so we add to database
            bcrypt.hash(password, 10, function(err, hash){
                if(err){
                    res.send(err)
                    return err;
                }
                console.log("Created hash: ",hash)
                const sqlQuery = `INSERT INTO userLogin(name, username, password) VALUES("${name}", "${username}", "${hash}");`
                db.run(sqlQuery)
                res.send("Successfully added")
                return hash
            });
        }
    });

});

app.listen(5000, () => {
    console.log("WELCOME TO MY FINAL WEBSITE wowoowoo")
})

# Backend of our React Project 

## Requirements 
Currently we are using sqlite3, passport, session, cors.

## Passport Strategy
### Authentication
For passport authentication, given a username and password, we check to see if it exists in the database. If the username exists, we will have that row. We grab the password in that row and use bcrpyt compare to validate the plaintext password. If true we send a "Logged in back", else Passport automatically sends a 401 Unathorized error.

### Reigstration
For registration we first search for the username. If the username already exists, we throw an error saying the user already exists. Otherwise we first hash the plaintext password, then insert (name, username, hashedPassword) into our "test.db" and send a success message.

## Routes
### POST ./login
Implements passport.auntheticate local strategy

### POST ./register 
Implements our registration strategy.

### POST ./user
Checks if a user is authenticated 
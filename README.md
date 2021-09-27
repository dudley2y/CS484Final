# Front End for our React Application

## Getting started
This application is using yarn bc I want all my packages to load fast (npm can be quite slow hehe)

Before you do anything make sure you do a `yarn install` to install all the packages.

In order to start the application, I set up the command `yarn start` to start the local environment. This will open it up in the browser.

## Pages

### Login

The login page currently toggles between states, the loginForm and SignupForm

#### Sign up Form
This form currently takes in first name, last name, username, password, and confirm password.
On the react side, it currently checks if password and confirm are equal. If so, we check the database to see if user exists. If the user exists, we throw an error. If User doesn't exist, we add user, then login the user with a session.

#### Login Form

The login form currently takes in a username and password. When you click the login button, we make a request to our database to see if the user exists. If the user exists, we use bcrpyt to compare our hashed password to our plaintext password. 
If user and pass is corrected, our page currently displays logged in. And we start a session.
If user or pass is incorrect, passport will throw a 401 Unathorized error.




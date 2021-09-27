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
On the react side, it currently checks if password and confirm are equal. If so, we send a request to our backend ./register route. We will either get a "user already exists" or "Success".
If success, we will be sent a session token.

#### Login Form

The login form currently takes in a username and password. When you click the login button,we will make a request to our backend ./login route. login will either send a "401 Unauthorized" or a "Logged in". If logged in, we will be given a session token.




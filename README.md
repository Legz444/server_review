# Server Review
##Review for creating a server using Express, Mongo and Mongoose for a 7 Restful Route CRUD React Application

###Setup

In Terminal:
`mkdir root folder` and cd into it
`touch server.js .gitignore` files
`npm init` and follow instructions
open in VS Code and open the VS Code Terminal

Add a new repository on Github

In VS code terminal:
`git init` to initialize an empty git repo
`git remote add origin` "git url"
Check that you have an origin and ability to push and fetch with `git remote -v`
`npm i express mongoose react@16 react-dom@16 express-react-views dotenv`

Express: Express. js makes it easier to manage web applications. Express. js is the backend part of MEAN and manages routing, sessions, HTTP requests, error handling, etc.

Mongoose: Mongoose is a Node. js based Object Data Modeling (ODM) library for MongoDB. Mongoose offers a variety of hooks, model validation, and other features aimed at making it easier to work with MongoDB.

React: React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.

React-dom: ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.

Express-react-views: This is an Express view engine which renders React components on server.

dotenv: The dotenv is a zero-dependency module that loads environment variables from a . env file into process. env .

`npm i -D nodemon`
Nodemon: nodemon is a tool that helps develop node. js based applications by automatically restarting the node application when file changes in the directory are detected.

add  "dev": "nodemon server.js" to package.json file under "scripts"
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```

`touch .env`

Inside .env type MONGO_URI= paste the application string copied from mongodb cluster
-update string with password and the name  for your current database
-save file

Add .env to .gitignore file

`git add -A` to stage all new changes
`git commit -m` to create a message for your first commit
`git push origin master` to push your new changes to your Github repo.

####Create File Structure for Restful Application
`mkdir models views controllers`
inside models `touch models.js` file
inside views `touch Index.jsx New.jsx Delete.jsx Update.jsx Create.jsx Edit.jsx Show.jsx` files
-INDUCES are the 7 Restful Routes. This is how we create applications that give the user and/or administrator the ability to read, update, create, and delete content on their website.(CRUD applications).

`git add -A` to stage all new changes
`git commit -m` to create a message for your commit
`git push origin master` to push your new changes to your Github repo.

###Connect Server.js
```jsx
//Import Modules//
//externals//
require('dotenv').config();
//this is your entry point for dotenv. Elswhere in the application you can call on it by saying process.env.VARIABLE_NAME//

const express= require('express');
const mongoose= require('mongoose');
//require the use of these libraries

const app = express();
const PORT = 3000;
//instantiate the use of express in your app and create a port to listen for during development
//at the bottom have the event listener//

//Body Parser Middleware to give access to req.body
app.use(express.urlencoded({extended: true})); // form data
app.use(express.json()); //raw json data
app.use((req,res, next)=>{
    console.log(req.body)
    next()
});

//connect to mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoose.connection.once('connected', () => console.log('Mongoose is ready'));

//set the view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Port listener
app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
});

```
Console should read:
```jsx
> node server.js

listening on port 3000
Mongoose is ready
```
`git add -A` to stage all new changes
`git commit -m` to create a message for your commit
`git push origin master` to push your new changes to your Github repo.


###Model and Schema in Models.js

```jsx
const {model, Schema} = require('mongoose');

const itemSchema = new Schema (
    {
        name:{type: String, required: true},
        quantity: {type: Number, required: true},
        completed: Boolean
    }
)

const Item = model('Item', itemSchema);

module.exports = Item;
```
1. We require mongoose for model and schema because we need access to the database and begin creating our data. Model and Schema are a part of the mongoose library. We do not need to require react or express because our data has nothing to do with viewing at this point.
2. Create New schema
-Your Schema is the wireframe for your data. All dynamically created data will follow this exact layout.
3. Create model to connect to the database.
-Consists of 2 parameters: the name of the collection, and the schema
4. Export the model so we can import it elsewhere in our application
5. Import the model in the server.js file
```jsx
const Item = require('./models/models');
```


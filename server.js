require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.body)
    next()
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.once('connected', () => console.log('Mongoose is ready'));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
});

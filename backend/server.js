const express = require('express')
const cors = require('cors') // for cross origin issue
const mongoose = require('mongoose')

require('dotenv').config()

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

console.log('uri uri uri   ', uri)

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB database connection established successfully');
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log('server is running on port', port)
});

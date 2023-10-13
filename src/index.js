// create a simple application 
const express = require('express');
const mongoose = require('mongoose');

// initialize express
const PORT = process.env.PORT || 2000;
const app = express();

// connect to mongodb
const DB_USER = root;
const DB_PASSWORD = example;
const DB_PORT = 27017;
const DB_HOST = 'mongo';

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// create a route
app.get('/', (req, res) => {
    res.send('Hello Docker!');
});

// listen on port 3000
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
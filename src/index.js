// create a simple application 
const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

// initialize express
const PORT = process.env.PORT || 2000;
const app = express();

// connect to mongodb
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo';

// connect to redis
const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';
const redisClient = redis.createClient(REDIS_PORT, REDIS_HOST);
client.on('connect', () => {
    console.log('connected to redis...');
});
client.on('error', (err) => {
    console.log('failed to connect to redis: ', err);
});


const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
    .connect(URI)
    .then(() => console.log('connected to db...'))
    .catch((err) =>console.log('failed to connect to db: ', err));

// create a route
app.get('/', (req, res) => {
    redisClient.set('products', 'products...');
    res.send('Hello World!');
});

app.get('/products', async (req, res) => {
    // get data from mongodb
    const products = await Product.find({});
    res.json(products);
});

// listen on port 2000
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
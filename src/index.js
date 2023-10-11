// create a simple application 
const express = require('express');

// initialize express
const PORT = process.env.PORT || 2000;
const app = express();

// create a route
app.get('/', (req, res) => {
    res.send('Hello!');
});

// listen on port 3000
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
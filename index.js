const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

const categories = require('./data/categories.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Duke of time!!');
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.listen(port, () => {
    console.log(`Dukeoftime's server running on port ${port}`);
});
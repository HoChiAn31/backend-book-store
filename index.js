const express = require('express');
const mongoose = require('mongoose');

var cors = require('cors');

const db = require('./src/config/config');
const routes = require('./src/routes/routes');
db.connect();
const app = express();
app.use(express.json(), cors());
app.use('/api', (req, res) => res.send('Hello World!'));
app.use('/', routes);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to port ${port}`));

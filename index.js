const express = require('express');
const mongoose = require('mongoose');
const db = require('./src/config/config');

const userRoute = require('./src/routes/user');
const loginRoute = require('./src/routes/login');

db.connect();
const app = express();
app.use(express.json());
app.use('/api', (req, res) => res.send('Hello World!'));
app.use('/user', userRoute);
app.use('/login', loginRoute);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to port ${port}`));

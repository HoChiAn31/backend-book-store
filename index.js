const express = require('express');
const mongoose = require('mongoose');
const db = require('./src/config/config');

db.connect();
const app = express();

// const port = process.env.PORT || 3000;
const port = 3000;

app.listen(port, () => console.log(`Listening to port ${port}`));

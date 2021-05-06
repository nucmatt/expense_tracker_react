const express = require('express');
const dotenv = require('dotenv');
// Colors allows for coloring your console messages
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env'});

const app = express();

app.get('/', (req, res) => res.send('Hello'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

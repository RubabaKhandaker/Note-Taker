const express = require('express');
const app = express();

const path = require('path');

const notes = require('./routes/index.js');

 app.use(notes);
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const routes = require('./src/routes');
const server = express();
mongoose.connect('mongodb+srv://maximosdrr:jH62mg21-dr@cluster0-aey44.mongodb.net/produtos?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});



server.use(routes);

server.listen(3333);
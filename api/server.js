const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/auth-middleware.js');
const authRouter = require('../auth/auth-router.js');
const catFactsRouter = require('../cat-facts/cat-facts-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter); // register and login
server.use('/api/cat-facts', authenticate, catFactsRouter); // after a user is logged and has a token 

module.exports = server;
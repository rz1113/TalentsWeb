const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const userService = require('../services/userService');
const loginService = require('../services/loginService');

const passport = require('passport');
const localStrategy = require('passport-local');

//bussiness logic put in service
//router helps us to find which service we need

router.get('/users', function (req, res) {
    userService.getUsers()
    .then(users => res.json(users));
});

router.get('/users/:id', function (req, res) {
    const id = req.params.id;
    userService.getUser(+id)
    .then(user => res.json(user));
});

router.post('/register', jsonParser, (req, res) => {
    loginService.register(req.body)
        .then(user => res.json(user),
            error => res.status(400).send('User already exists'));
});

router.put('/users', jsonParser, (req, res) => {
    userService.modifyUser(req.body)
        .then(user => res.json(user),
            error => res.status(400).send('User does not exist'));
});

module.exports = router;
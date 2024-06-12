const express = require('express');
const router = express.Router();
const controller = require("../controllers/usuarios.controller.js")

module.exports = (request, response, next) => {
    if (!request.session.isLoggedIn) {
        return response.redirect('/users/login');
    }
    next();
}

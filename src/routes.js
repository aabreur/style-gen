const express = require('express');
const { buildStyleSheet } = require('./controllers/styleBuilder.controller')


const router = new express.Router();
router.post('/build', buildStyleSheet);

module.exports = router
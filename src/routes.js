const express = require('express');
const { buildStyleSheet } = require('./controllers/styleBuilder.controller');
const { body, validationResult } = require('express-validator');


const router = new express.Router();
router.post(
    '/build',
    body('patternID').isNumeric(),
    body('theme').isString(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).end();
        }
        return buildStyleSheet(req, res, next);
})

router.get('/demo/:theme/:id', function (req, res) {
    res.render(req.params.theme, { id: req.params.id })
})
  

module.exports = router
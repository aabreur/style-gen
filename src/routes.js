const express = require('express');
const { buildStyleSheet } = require('./controllers/styleBuilder.controller')


const router = new express.Router();
router.post('/build', buildStyleSheet);

router.get('/demo/:theme/:id', function (req, res) {
    res.render(req.params.theme, { id: req.params.id })
})
  

module.exports = router
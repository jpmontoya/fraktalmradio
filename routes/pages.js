const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/sorteos', (req, res) => {
    res.render('sorteos');
});

router.get('/entrevistas', (req, res) => {
    res.render('entrevistas');
});

router.get('/sobrenosotros', (req, res) => {
    res.render('sobrenosotros');
});

module.exports = router;
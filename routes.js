const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

routes.get('/products', function(req, res, next) {
    //todo: get stuff from mongodb
    res.json();
});


module.exports = router;
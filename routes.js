const express = require('express');
const router = express.Router();
const product_controller = require('./controller/product');
//import
/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

router.get('/products', product_controller.product_get_all);

router.get('/products/:id', product_controller.product_details);
router.post('/products/add', product_controller.product_create);


router.put('/products/:id', product_controller.product_update);

router.delete('/products/:id', product_controller.product_delete);





module.exports = router;
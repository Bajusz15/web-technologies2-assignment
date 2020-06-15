const express = require('express');
const router = express.Router();
const product_controller = require('./controller/product');
const user_controller = require("./controller/user")
//import
/* GET home page. */
function middleware (req, res, next) {
    // document.cookie = "username=John Doe";
    // authentication middleware
    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
    // Verify login and password are set and correct
    //todo: here get user based on login, and if everything matches good to go
    user_controller.get_user(login).exec(function (err, user) {
        if (login && password && login === user.name && password === user.password) {
            // Access granted...
            return next()
        }
        // Access denied...
        res.set('WWW-Authenticate', 'Basic realm="401"')
        res.status(401).send('Authentication required.') // custom message
    })
}
router.get('/',  middleware, function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});



router.get('/products', middleware,product_controller.product_get_all);

router.get('/products/:id', middleware,product_controller.product_details);
router.post('/products/add', middleware,product_controller.product_create);


router.put('/products/:id',middleware, product_controller.product_update);

router.delete('/products/:id', middleware, product_controller.product_delete);





module.exports = router;
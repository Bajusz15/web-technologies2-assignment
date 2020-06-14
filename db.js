const MongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb://localhost:27017/beadando';
let dbObject;


// Connect to the db

MongoClient.connect(dbURL, function (err, db) {
    dbObject = db;
    // let cursor = db.collection('products').find();
    //
    // cursor.each(function (err, doc) {
    //
    //     console.log(doc);
    //
    // });
}).then(r  =>{

});

function getProducts() {
    let cursor = dbObject.collection('Products').find();
    return cursor.map(function (err, doc) {
        console.log(doc);
        return doc;
    });
}


function addProduct(product) {
    dbObject.collection('Products').insertOne(product).then(r => {
        //todo: return false or true depending on successful insert
    });
}


function updateProduct() {
    dbObject.collection('Products').updateOne({
        "key": "value"
    }, {
        $set: {
            "key": "newValue"
        }
    });
}

function deleteProduct(key, value) {
    dbObject.collection('Products').deleteOne(
        {
            key: value
        }
    );
}

exports.deleteProduct = deleteProduct();
exports.getProducts = getProducts();
exports.addProduct = addProduct();
exports.updateProduct = updateProduct();
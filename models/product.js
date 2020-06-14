const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 1000000},
    price: {type: Number, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('Product', ProductSchema);
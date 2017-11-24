/**
 * Created by artemkopytko on 11/24/17.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    title: String,
    description: String,
    price: Number
});

var Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
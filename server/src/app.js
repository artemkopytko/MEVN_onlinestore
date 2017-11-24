/**
 * Created by artemkopytko on 11/24/17.
 */
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/products');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
    console.log("Connection Succeeded");
});

var Product = require("../models/product");

// Add new post
app.post('/products', (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var description = req.body.description;
    var price = req.body.price;
    var new_product = new Product({
        title: title,
        description: description,
        price: price
    })

    new_product.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Product saved successfully!'
        })
    })
})

// Fetch all posts
app.get('/products', (req, res) => {
    Product.find({}, 'title description price', function (error, products) {
        if (error) { console.error(error); }
        res.send({
            products: products
        })
    }).sort({_id:-1})
})

app.listen(process.env.PORT || 8081)
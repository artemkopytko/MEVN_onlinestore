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
var User = require("../models/user");

// Add a new user
app.post('/register', (req, res) => {
    var db = req.db;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var passwordConf = req.body.passwordConf;


    if (email && username && password && passwordConf) {
        var userData = new User({
            email : email,
            username : username,
            password : password,
            passwordConf : passwordConf
        })

        User.create(userData, function (err, user) {
            console.log("user created");
            if (err) {
                console.log(err)
            }
            res.send({
                success: true,
                message: 'User registered successfully!',
            })

        });
    }
})
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

// Fetch profile data
app.get('/profile/:id', (req, res) => {
    var db = req.db;
    User.findById(req.params.id, 'email username password', function (error, profileData) {
        if (error) { console.error(error); }
        res.send(profileData)
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
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const env = require('dotenv').config()
app.use(express.json())
app.use(cors())

const PORT = env.parsed.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connectDB = require('../connection/connection')
connectDB()

//Importing productSchema
const product = require('../schema/productSchema')
const productSchema = require('../schema/productSchema')

app.post('/addproduct', async (req, res) => {
    const { name, color, quantity } = req.body;
    // Find the maximum postid in the collection
    productSchema.findOne({}, {}, { sort: { postid: -1 } })
        .then((latestProduct) => {
            let newProductid = 1;
            if (latestProduct) {
                newPostid = latestProduct.postid + 1;
            }

            const product = new productSchema({
                postid: newProductid,
                name: name,
                quantity: quantity,
                color: color
            });

            product.save()
                .then((savedPost) => {
                    res.status(201).json(savedPost);
                    console.log(savedPost);
                })
                .catch((error) => {
                    res.status(500).json({ error: 'Error saving post' });
                    console.log(error);
                });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error retrieving latest post' });
        });

});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));                  
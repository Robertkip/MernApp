const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const productSchema = require('./Routes/api');
const projectSchema = require('./Routes/product');
app.use(cors())

const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/app/project', projectSchema);
app.use('/app/products', productSchema);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('MongoDB database connected successfully');
    })
    .catch((err) => {
        console.log('Mongodb connection error occurred');
    });
app.get("/", async (req, res) => {
    res.json({ message: "Welcome to Ecommerce application." });
});

app.listen(port, () => {
    console.log(`Server is currently running on port ${port}`)
});
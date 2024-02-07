const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;


const bodyParser = require('body-parser');
const jsonwebtoken = require('jsonwebtoken');

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', require('./Routes/authRoutes'));
app.use('/api/private', require('./Routes/privateRoutes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5173'
}));
const port = process.env.PORT || 5000;
const usersRoute = require('./Routes/api/user.js');

app.use(express.json());

app.use('/api/users', usersRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });

//Checking the application if it is running or not
app.get('/', (req, res) => {
    res.send('Mern stack application')
})

app.listen(port, () => {
    console.log(`Server is currently running on port ${port}`)
});
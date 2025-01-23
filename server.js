const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
require ('dotenv').config();

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.DB_URL).then((result) => {
    console.log("DB isconnected");
}).catch(err => {
    console.log(err);
});



//middleware
app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
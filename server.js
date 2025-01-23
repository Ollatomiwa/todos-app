const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

//middleware//
require ('dotenv').config();
mongoose.connect(process.env.DB_URL).then((result) => {
    console.log("DB isconnected");
}).catch(err => {
    console.log(err);
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
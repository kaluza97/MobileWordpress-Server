const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error: Error) => console.error(error))

app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/RestaurantRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here



mongoose.connect("mongodb+srv://101213098:2409Mongodb@cluster0.zq8k00c.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(restaurantRouter);

app.listen(3000, () => { console.log('Server is running...') });
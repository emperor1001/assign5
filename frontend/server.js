const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/Routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(routes);

mongoose.connect('mongodb://localhost:27017/employees', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

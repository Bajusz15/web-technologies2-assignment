const express = require('express');
const cors = require("cors");
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const mongoDB = 'mongodb://localhost:27017/beadando';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(cors());
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

const router = require('./routes');
app.use("/", router);
// create a GET route
// app.get('/express_backend', (req, res) => {
//     res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });


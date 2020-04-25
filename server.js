const express = require('express');
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

const router = require('./routes');
app.use("/", router);
// create a GET route
// app.get('/express_backend', (req, res) => {
//     res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });


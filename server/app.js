const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/api');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

var corsOptions = {
    origin: 'https://localhost:3000',
    // optionsSuccessStatus: 200 /// For legacy browser support
}

const connectionParams = {
    newUrlParser: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('conected to DB');
    })
    .catch((error) => {
        console.log('error to connect ' + error);
    })

const app = express();

app.use(bodyParser.json());
app.use('/', router);
app.use(cors(corsOptions));

app.listen(4000, () => {
    console.log('listening on port 4000');
})
const ENV = process.env.ENV ||  'dev';
require('dotenv').config({ path: `./.${ENV}.env` });

const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 8080;
//const MongoStore = require('connect-mongo');

//Conect to DB
connectDB();

app.use(express.static('public'));
app.use('/', require('./routes/main'));

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});


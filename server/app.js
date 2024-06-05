const ENV = process.env.ENV ||  'dev';
require('dotenv').config({ path: `./.${ENV}.env` });

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

const allowedOrigins = ['http://localhost:3000', 'http://react-app:3000'];

const corsOptions = {
  origin: (origin, callback) => {
    console.log(`Request atempt at: ${Date.now()} by ${origin}`);
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS ${origin}`));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));

//Conect to DB
connectDB();

//app.use(express.static('public'));
app.use('/', require('./routes/main'));

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});


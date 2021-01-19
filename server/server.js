require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const mongoose = require('mongoose');
const mainRouter = require('./routes/main');
const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT ?? 3000;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const dbConnectionURL = process.env.URL;

function dbConnect() {
  mongoose.connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err);
    return console.log('Success connected to mongoDB');
  });
}

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
}));

const secretSession = process.env.SESSION_KEY;
app.use(session({
  name: 'sid',
  secret: secretSession,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
  },
}));

app.use('/', mainRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

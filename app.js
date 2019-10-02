const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/form');
// require('dotenv').config();
const compression = require('compression');

const app = express();

const PORT = process.env.PORT || 5000;

if (propcess.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//FOR CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());

app.use(routes);
app.use(compression());

// app.use((req, res, next) => {
//   res.send('Server started');
// });

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  res.status(status).json(message);
});

mongoose
  .connect(`mongodb://manik:hellohello1@ds151416.mlab.com:51416/task`, {
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log('server started');
    });
  })
  .catch(err => {
    console.log(err);
  });

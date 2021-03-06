const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.js');
const saucesRoutes = require('./routes/sauces.js');
const path = require('path');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://AwaS:Ocr1000A@cluster0.lulb4.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

  app.use(bodyParser.json());


app.use('/api/auth', userRoutes);
app.use('/api/sauces', saucesRoutes)
app.use('/images', express.static(path.join(__dirname, 'images')));
module.exports = app;

const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();


app.use(express.json());


app.use(cors());


app.use((req, res, next) => { 
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', require('./routes/reserva.routes.js'));

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(45635, () => console.log('Server on port 45635'));


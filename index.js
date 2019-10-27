const express=require('express');
const path=require('path');
const cors = require('cors');
const bodyParser=require('body-parser');
const multer  = require('multer');
const request = require('request');
const upload=multer();
require('./mongodb');
const app = express();
const port=process.env.PORT || 4000;
app.use(express.static(path.join(__dirname, 'payease_frontend/build')))
app.use(cors());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/payease_frontend/build/index.html'));
  });

app.listen(port)
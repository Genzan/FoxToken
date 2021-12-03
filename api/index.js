// Carga de Librerias Externas
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const API_TestNFT = require("./tools/TestNFT");

const NFTObj = new API_TestNFT();

const SERVERPORT = 8020;

var rawBodyHandler = function (req, res, buf, encoding) {
  if (buf && buf.length) {
      req.rawBody = buf.toString(encoding || 'utf8');
  }
}

app.use(cors({ allowedHeaders: 'Content-Type, Cache-Control' }));
app.options('*', cors());
app.use(bodyParser.json({ verify: rawBodyHandler }));

// Funciones
app.post('/api/createZorro', async (req, res) => {
  let response = await NFTObj.createZorro(req.body.uri, req.body.score);
  if(response){
    res.status(200).send();
  }
  else {
    res.status(400).send();
  }
});

// run the app server and tunneling service
app.listen(SERVERPORT, () => {
  console.log(`API listening at http://localhost:${SERVERPORT}`)
});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const DBConnnection = require('./src/data/dbconnection');
const elementsController = require('./src/controller/elements-controller');
const app = express();
const port = 4444;
const mockEnabled = true;

DBConnnection.startConnection();

if (mockEnabled) {
    app.use(express.static('public'));
}
app.use(bodyParser.json());
elementsController.getController(app);

app.listen(port, () => {});
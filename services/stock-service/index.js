const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/stock', (req, res) => {
    // Logique de gestion des stocks
    res.send({ message: 'Gestion des stocks!' });
});

app.listen(3002, () => {
    console.log('Microservice de gestion des stocks en cours d\'exécution sur le port 3002');
});

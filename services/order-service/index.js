const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/orders', (req, res) => {
    // Logique de traitement des commandes
    res.status(201).send({ message: 'Commande créée!' });
});

app.listen(3001, () => {
    console.log('Microservice de traitement des commandes en cours d\'exécution sur le port 3001');
});

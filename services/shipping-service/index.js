const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/shipping', (req, res) => {
    // Logique de gestion de l'expédition
    res.status(201).send({ message: 'Expédition créée!' });
});

app.listen(3003, () => {
    console.log('Microservice de gestion de l\'expédition en cours d\'exécution sur le port 3003');
});

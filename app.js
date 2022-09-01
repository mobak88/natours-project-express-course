const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello from the server side', app: 'Natours' });
});

const url = process.env.URL || 'localhost';

const port = process.env.PORT || 8080;

app.listen((port), () => {
    console.log(`App running on: http://${url}:${port}`);
});
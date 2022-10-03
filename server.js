const app = require('./app');

const url = process.env.URL || 'localhost';
const port = process.env.PORT || 3000;

app.listen((port), () => {
    console.log(`App running on: http://${url}:${port}`);
});
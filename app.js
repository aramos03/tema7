const express = require('express');
const app = express();
const port = 9090;
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'Pon tu nombre' })
});
app.get('/hola', (req, res) => {
    res.render('hola', { message: req.query['nombre'] })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
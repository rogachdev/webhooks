const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.set('json spaces', 2);

app.post('/webhook', (req, res) => {

});

app.get('/', (req, res) => {
    res.status(200).json({ result: 'webook funcionando' })
});

app.listen('3000', () => {
    console.log('webhook started on listen port 3000');
});
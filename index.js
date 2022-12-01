const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors())

const data = require('./data/data.json');

app.get('/', (req, res) => {
    res.send(data);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedData = data.find(d => d.id === id);
    res.send(selectedData);


})


app.listen(port, () => {
    console.log('dragon news running on', port)
})
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors')

const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
    res.send('chefs server is running')
})

app.use(cors());

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    console.log(id)
    const selectedChef = chefs.find((c) => c._id === id) || {};
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`server is live at port: ${port}`)
})
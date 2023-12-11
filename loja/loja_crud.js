const express = require('express');
const app = express();

app.use(express.json());

app.listen(3002, () => {
    console.log('ABRINDO O SERVIDOR..')
})


const carros = [];

app.get('/carros', (req, res) => {
    res.status(200).send({carros: carros});
})

app.get('/carros/:id', (req, res) => {
    const carro = carros.find(x => x.id == req.params.id);
    res.status(200).send(carro);
})

app.post('/carro/cadastrar', (req, res) => {
    carros.push(req.body);
    res.status(200).send('Carro cadastrado !');
})

app.put('/carro/atualizar/:id', (req, res) => {
    const carro = carros.find(x => x.id == req.params.id);
    const carroID = carros.indexOf[carro];
    carros[carroID] = req.body;
    res.status(200).send('Carro atualizado !')
    console.log(carros[carroID])
})

app.delete('/carro/deletar/:1', (req, res) => {
    const carro = carros.find(x => x.id == req.params.id);
    const carroID = carros.indexOf[carro];
    carros.slice(carroID, 1);
    res.status(200).send('Carro deletado !')
})

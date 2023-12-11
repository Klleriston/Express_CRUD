const express = require('express');
const app = express();
const db = require('./dbveiculos_crud');
const dbcontext = db.veiculosDatabase();

app.use(express.json());

app.listen(3002, () => {
    console.log('ABRINDO O SERVIDOR..')
})

app.get('/carros', async (req, res) => {
    res.status(200).send(await dbcontext.list());
})

app.get('/carros/:id', async (req, res) => {
    res.status(200).send(await dbcontext.get(req.params.id));
})

app.post('/carro/cadastrar', async (req, res) => {
    await dbcontext.insert(req.body);
    res.status(200).send('Carro cadastrado !');
})

app.put('/carro/atualizar/:id', async (req, res) => {
    await dbcontext.update(req.body, req.params.id);
    res.status(200).send('Carro atualizado !')
})

app.delete('/carro/deletar/:1', async (req, res) => {
    await dbcontext.del(req.params.id)
    res.status(200).send('Carro deletado !')
})

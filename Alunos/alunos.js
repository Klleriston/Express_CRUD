const express = require('express');
const bdd = require('./bdd');
const dbalunos = bdd.AlunosDatabase();
const app = express();
app.use(express.json());

app.listen(3006, () => {
    console.log('INICIANDO SERVIDOR !')
})

app.get('/alunos', async (req, res) => {
    res.status(200).send(await dbalunos.list());
})

app.get('/alunos/:id', async (req, res) => {
    res.status(200).send(await dbalunos.get(req.params.id));
})

app.post('/alunos/cadastrar', async (req, res) => {
    await dbalunos.insert(req.body);
    res.status(200).send('Aluno cadastrado !');
})

app.put('/aluno/atualizar/:id', async (req, res) => {
    await dbalunos.update(req.body ,req.params.id)
    res.status(200).send('Lista de alunos atualizada !')
})

app.delete('/alunos/delete/:id', async (req, res) => {
    await dbalunos.del(req.params.id)
    res.status(200).send('Aluno Deletado !')
})
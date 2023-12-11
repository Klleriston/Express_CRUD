const express = require('express');
const app = express();
app.use(express.json());
const users = [];

app.get('/usuarios', (req, res) => {
    console.log('api get usuario')
    res.status(200).send(users)
})
app.get('/usuarios/:id', (req, res) => {
    console.log('api get id usuario')
    const id = users.find(x => x.id == req.params.id)
    res.status(200).send(id)
})
app.post('/usuarios/cadastrar', (req, res) => {
    users.push(req.body)
    console.log('api post')
    res.status(200).send('usuario cadastrado')
})
app.put('/usuarios/editar/:id', (req, res) => {
    const id = users.find(x => x.id == req.params.id)
    const usuarioID = users.indexOf(id)
    users[usuarioID] = req.body
    res.status(200).send('aluno atualizado!')
    console.log('api put usuario')

})
app.delete('/usuarios/delete/:id', (req, res) => {
    const id = users.find(x => x.id == req.params.id)
    const usuarioID = users.indexOf(id)
    users.slice(usuarioID, 1)
    res.status(200).send('Usuario deletado !')
    console.log('api delete usuario')

})
app.listen(3000, () => {
    console.log('INICIANDO O SERVIDOR')
})


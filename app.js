const express = require('express');
const app = express();
app.use(express.json())

app.get('/usuarios', (req, res) => {
    console.log('api get usuario')

    res.status(200).send('todos os usuarios encontrados !')
})
app.get('/usuarios/:id', (req, res) => {
    console.log('api get id usuario')
    res.status(200).send(`o usuario foi econtrado ! ${req.params.id}`)
})
app.post('/usuarios/cadastrar', (req, res) => {
    console.log('api post')
    res.status(200).send(req.body)
})
app.put('/usuarios/editar/:id', (req, res) => {
    res.status(200).send(req.params.id)
    console.log('api put usuario')

})
app.delete('/usuarios/delete/:id', (req, res) => {
    res.status(200).send('Usuario deletado !')
    console.log('api delete usuario')

})
app.listen(3000, () => {
    console.log('INICIANDO O SERVIDOR')
})


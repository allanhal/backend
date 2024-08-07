const app = require('express')()

// HTTP METHODS - Métodos HTTP
// GET - cRud = READ
// POST - crud = CREATE
// PUT - crUd = UPDATE
// PATCH - crUd = UPDATE
// DELETE - cruD = DELETE
app.get('/', (req, res) => {
    res.send('GET /, AGORA É TUDO NOSSO')
})

app.post('/chuchu',  (req, res) => {
    res.send('POST /chuchu, AGORA É TUDO NOSSO')
})

app.listen(3000, () => {
    console.log('CHUCHU SUBIU')
})
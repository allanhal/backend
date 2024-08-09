const app = require('./app-express.js')

app.get('/v1/product/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.params.id', request.params.id)

    Product.findOne({ where: { id: request.params.id } })
        .then((result) => res.send(result))
})

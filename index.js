const express = require('express')
var cors = require('cors')
const app = express()
const port = 10000

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Olá, mundo')
})


// https://pagamento.inter.com/pagamento?tipo=boleto&valor=100&pedido=100&desconto

app.get('/v1/user/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.params.id', request.params.id)

    // COMECO DO CODIGO BRABO
    const mysql = require('mysql2');

    // Crie uma conexão com o banco de dados
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'dc'
    });

    // Conecte-se ao banco de dados
    connection.connect((err) => {
        if (err) {
            return console.error('Erro ao conectar: ' + err.stack);
        }
        console.log('Conectado como id ' + connection.threadId);


        // Execute uma consulta SQL
        connection.query('select * from dc.usuarios where id='+request.params.id+';', (err, results, fields) => {
            if (err) {
                console.error('Erro ao executar consulta: ' + err.stack);
                return;
            }
            console.log('Resultados da consulta:', results);
            res.send(results)
        });

    });


    // FIM DO CODIGO BRABO
    // 'select * from dc.usuarios where id=1;'
    // res.send({
    //     "id": 1,
    //     firstname: "primeiro nome",
    //     surname: 'segundo nome',
    //     email: 'email@email.com',
    //     password: 1234
    // })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const app = require('./app-express.js')
const jwt = require('jsonwebtoken');
const { User } = require('../models/models.js');
const { validarEmailSenha } = require('../util/validations.js');



// Rota de login para gerar o token
app.post('/login', (req, res) => {
    const dados = req.body;

    if (validarEmailSenha(dados.email, dados.password)) {
        res.status(401).send('dados incorretos')
        return;
    }

    User.findOne({ where: { email: dados.email, password: dados.password } })
        .then((result) => {
            if (result) {
                const accessToken = jwt.sign(dados, process.env.JWT_SECRET, { expiresIn: '1h' });
                const decodificado = jwt.verify(accessToken, process.env.JWT_SECRET);
                res.json({ accessToken, decodificado });
            } else {
                res.status(401).send('senha errada')
            }
        })
});

app.get('/meus-pedidos', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const decodificado = jwt.verify(token, process.env.JWT_SECRET);

    if (decodificado) {
        res.json([{ pedido: 1, valorTotal: 10, quantidadeDeItens: 2 }, { pedido: 1, valorTotal: 10, quantidadeDeItens: 2 }, { pedido: 1, valorTotal: 10, quantidadeDeItens: 2 }, { pedido: 1, valorTotal: 10, quantidadeDeItens: 2 }])
    } else {
        res.status(403).send('vc nao tem permissao nessa rota')
    }

})
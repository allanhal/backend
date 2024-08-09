const app = require('./app-express.js')

const jwt = require('jsonwebtoken');


// Middleware para verificar o token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Rota de login para gerar o token
app.post('/login', (req, res) => {
    const dados = req.body;

    const accessToken = jwt.sign(dados, process.env.JWT_SECRET, { expiresIn: '1h' });

    const decodificado = jwt.verify(accessToken, process.env.JWT_SECRET);
    res.json({ accessToken, decodificado });
});

app.get('/meus-pedidos', (req, res) => {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    const decodificado = jwt.verify(token, process.env.JWT_SECRET);

    res.json({decodificado})
})
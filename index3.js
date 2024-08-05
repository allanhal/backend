const express = require('express');
const app = require('app');

app.listen(3000, function(){
    console.log("Servidor Rodando");

});


// o chat gpt tinha me mostrado assim

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

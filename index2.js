const mysql = require('mysql2');

// Crie uma conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'teste'
});

// Conecte-se ao banco de dados
connection.connect((err) => {
  if (err) {
    return console.error('Erro ao conectar: ' + err.stack);
  }
  console.log('Conectado como id ' + connection.threadId);


  // Execute uma consulta SQL
  connection.query('select * from teste.alunos where id=1;', (err, results, fields) => {
    if (err) {
      console.error('Erro ao executar consulta: ' + err.stack);
      return;
    }
    console.log('Resultados da consulta:', results);
  });

});


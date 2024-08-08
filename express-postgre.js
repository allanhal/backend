const { Sequelize, DataTypes } = require('sequelize');
const port = 10000

// const sequelize = new Sequelize('postgres', 'postgres.usvcxewqdvrdprccfnwb', 'projeto-back', {
//     host: 'aws-0-us-west-1.pooler.supabase.com',
//     dialect: 'postgres',
//     logging: false, // Desative o log de SQL se não precisar
//     dialectOptions: {
//         supportBigNumbers: true,
//         ssl: {
//             rejectUnauthorized: false, // Trust the self-signed certificate

//         }
//     }
// });

const sequelize = new Sequelize('postgresql://postgres.usvcxewqdvrdprccfnwb:projeto-back@aws-0-us-west-1.pooler.supabase.com:6543/postgres');


const User = sequelize.define('User', {
    // Definição dos atributos do modelo
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    // Outros atributos podem ser definidos aqui
}, {
    // Outras opções do modelo
    tableName: 'users', // Nome da tabela no banco de dados
    timestamps: false, // Defina como `true` se você usar timestamps
});

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sincronize os modelos com o banco de dados
sequelize.sync({ alter: true })

    .then(() => {
        console.log('Banco de dados sincronizado');
    })
    .catch(err => {
        console.error('Erro ao sincronizar o banco de dados:', err);
    });


// // Adicionar um novo usuário
// app.post('/users', async (req, res) => {
//     try {
//         const user = await User.create(req.body);
//         res.status(201).json(user);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Buscar todos os usuários
// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.findAll();
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// Buscar um usuário por ID
app.get('/v1/users/:id', async (req, res) => {
    try {
        const user = await User.findByPk(Number(req.params.id));
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// // Atualizar um usuário por ID
// app.put('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (user) {
//             await user.update(req.body);
//             res.status(200).json(user);
//         } else {
//             res.status(404).json({ error: 'Usuário não encontrado' });
//         }
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Deletar um usuário por ID
// app.delete('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (user) {
//             await user.destroy();
//             res.status(204).send();
//         } else {
//             res.status(404).json({ error: 'Usuário não encontrado' });
//         }
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

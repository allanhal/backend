require('dotenv').config()
console.log(process.env.USUARIO)

console.log(process.env.SENHA)

console.log(process.env.HOST)

require('./routes/userRoutes')
require('./routes/productRoutes')

const app = require('./routes/index')
const PORT = process.env.PORT || 10000

app.listen(PORT, ()=> { console.log('chuchu atomico')})
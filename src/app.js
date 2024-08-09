require('./routes/userRoutes')
require('./routes/productRoutes')

const app = require('./routes/index')
const PORT = 10000

app.listen(PORT, ()=> { console.log('chuchu atomico')})
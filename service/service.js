const express = require('express')
const app = express()
const router = require('../routes/livros')

app.use(express.json)
app.use('/api/v1/livros', router)

const port = 8080
app.listen(port, () => {
 console.log('Aguardando requisição')
})
import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
    console.log('app rodando em: https://localhost:3000');
})


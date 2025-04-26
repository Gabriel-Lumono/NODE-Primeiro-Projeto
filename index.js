import express from 'express'
import db from './config/database.js'

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor roando na porta ${PORT}`)
})
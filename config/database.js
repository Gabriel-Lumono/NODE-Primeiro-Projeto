import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,  
});

try {
    await connection.execute('SELECT 1')
    console.log('Conexão Estabelecida')
} catch (error) {
    console.log('Erro ao se conectar com o banco de dados', error)
};

export default connection;
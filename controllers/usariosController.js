import connection from "../config/database.js";

const usuariosController = {
    async criar(req, res){
        try{
            const {nome, email, idade} = req.body
            const [result] = await connection.execute(
                'INSERT INTO usuarios (nome, email, idade) VALUES (?, ?, ?)',
                [nome, email, idade]
            );  

            return res.status(201).json({
                succes: true,
                message: 'usuario registrado com sucesso!',
                data: {nome, email, idade}
            })
        } catch (error) {
            console.log('Erro ao inserir usuario', error)
            return res.status(500).json({
                sucess: false,
                message: 'Erro ao inserir usuario',
                error: error.message
            })
        }
    },

    async listarUsuarios(req, res){
        try {
            const [todosUsuarios] = await connection.execute('SELECT * FROM usuarios');

            return res.status(201).json({
                sucess: true,
                count: todosUsuarios.length,
                data: todosUsuarios
            })
        } catch (error) {
            return res.status(500).json({
                succes: false,
                message: "Houve um erro ao encontrar usuarios",
                error: error.message
            })
        }
    }
}

export default usuariosController
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('node_tarefas',
'luan','info2k21',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectado com banco de dados')
} catch(error){
    console.error('Não foi possível conectar ao bd: ',error)
}

module.exports = sequelize
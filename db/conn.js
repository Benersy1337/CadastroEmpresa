const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit : 10,
    host: 'localhost',
    user: 'luan',
    password: 'info2k21',
    database:'node',
    port: 3306
})

module.exports = pool
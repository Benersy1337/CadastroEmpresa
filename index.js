//Instalar os módulos
//npm install nodemon express express-handlebars mysql

//Estrutura básica da aplicação
const express = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//midleware para interpretar os dados do formulário POST
app.use(
    express.urlencoded({
        extended : true
    })
)

app.use(express.json())

//midleware para definir a pasta estática 'pública'
app.use(express.static('public'))

//Rota inicial
app.get('/', function(req,res){
    res.render('home')
})

//Rota para receber os dados do formulário cadastrar
app.post('/books/insertbook', function(req,res){
    const title = req.body.title
    const pageqty = req.body.pageqty
    const ramo = req.body.ramo
    const matriz = req.body.matriz
    const cnpj = req.body.cnpj
    const filiais = req.body.filiais
    const ano = req.body.ano 

    const dataatual = new Date()

    const anoatual = dataatual.getFullYear()

    const idade = anoatual - ano

    const sql = `INSERT INTO books (title,pageqty,ramo,matriz,cnpj,filiais,ano,idade) VALUES ('${title}','${pageqty}','${ramo}','${matriz}','${cnpj}','${filiais}','${ano}','${idade}');`

    pool.query(sql, function(err){
        if (err){
            console.log(err)
        }

        res.redirect('/')
    })
})

//Rota para listar todos os livros
app.get('/books', function(req,res){
    const sql = "SELECT * FROM books;"
    pool.query(sql, function(err,data){
        if (err){
            console.log(err)
        }

        res.render('books', {books:data})
    })
})

//Rota para listar o livro específico
app.get('/books/:id',function(req,res){
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = ${id}`
    pool.query(sql, function (err,data){
        if (err){
            console.log(err)
        }
        const book = data[0]
        res.render('book', {book: book})
    })
})

//Rota para editar o livro
app.get('/books/edit/:id',function(req,res){
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = ${id}`
        pool.query(sql,function(err,data){
            if (err){
                console.log(err)
            }
            const book = data[0]

            res.render('editbook',{book:book})
        })
})

//Rota para receber os dados atualizados do livro
app.post('/books/updatebook', function(req,res){
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty
    const ramo = req.body.ramo
    const matriz = req.body.matriz
    const cnpj = req.body.cnpj
    const filiais = req.body.filiais
    const ano = req.body.ano 

    const dataatual = new Date()

    const anoatual = dataatual.getFullYear()

    const idade = anoatual - ano

    const sql = `UPDATE books SET title='${title}', pageqty='${pageqty}', ramo='${ramo}', matriz='${matriz}',cnpj='${cnpj}',filiais='${filiais}',ano='${ano}', idade='${idade}' WHERE id = '${id}'`
    pool.query(sql,function(err){
        if (err){
            console.log(err)
        }
        res.redirect(`/books/${id}`)
    })
})

//Rota para excluir o livro
app.post('/books/remove/:id', function(req,res){
    const id = req.params.id
    const sql = `DELETE FROM books WHERE id = ${id}`
    pool.query(sql,function(err){
        if (err){
            console.log(err)
        }
        res.redirect(`/books`)
    })
})

app.listen(3000)


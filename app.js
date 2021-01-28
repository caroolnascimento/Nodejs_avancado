var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var buscaCep = require('./src/funcoes/buscaCep')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/', (req, res) => {
      res.render('index')
})

app.post('/envia-cep', async (req, res) => {
    var { cep } = req.body
    var resultado = await buscadorCep(cep)

    res.render('resultado', {dado: resultado})
})

app.listen(3333)
var fetch = require('node-fetch')

module.exports = async function buscadorCep(cep) {
    var response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var json = await response.json()

    return json 
}


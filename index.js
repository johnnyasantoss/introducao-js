//importamos o módulo do express
const express = require("express");

function meuAngularApp() {
    // criamos nosso servidor do express
    // qualquer dúvida que você tenha de como usa-lo melhor
    // acesse a referência da API do express
    // http://expressjs.com/pt-br/4x/api.html
    var app = express();

    // a função use() ela serve para permitir que você use
    // um controlador de requisições feitas em seu servidor
    // estaremos usando a função express.static() para gerar 
    // um servidor de conteudo estático na pasta 'src'
    // para podermos acessar na url '/'
    app.use(express.static("./src", {
        extensions: [
            "html",
            "htm",
            "js",
            "css"
        ]
    }));

    // criamos outro controlador para as nossas 
    // bibliotecas. Assim não precisamos usar um site externo
    // para carregar nossas bibliotecas
    app.use(express.static("./node_modules", {
        extensions: [
            "js",
            "css"
        ]
    }));

    // a função listen() faz com que o servidor espere
    // por requisições na porta informada
    // nesse caso a porta 80
    app.listen(80, function (erro) {
        // se acontecer algum erro ao ligar
        // o erro vai ser mostrado e a aplicação para
        if (erro)
            throw erro;

        // Exibimos no console que o servidor está ligado
        // e pronto para receber requisições
        console.log("Servidor iniciado em http://127.0.0.1:80");
    });

    return app;
}

// Aqui é exportado o módulo do nosso servidor
// caso você queira saber mais sobre módulos do Node
// procure por "CommonJS Modules"
module.exports = meuAngularApp();

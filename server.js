// usei o express pra criar e configurar o servidor
const express = require("express")
const server = express()

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programcao",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saude",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditacao",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaoke",
        category: "Diversao",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    }
]

//configurar arquivos estaticos(css, scripts, imagens...)
server.use(express.static("public"))

//configuracao do nunjucks - faz pegar a pasta views
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true,
})


// criei uma rota/
//e capturo o pedido do cliente para responder
server.get("/", function(req, res){
    return res.render("index.html", { ideas })
})

server.get("/ideias", function(req, res){
    return res.render("ideias.html")
})

// liguei meu servidor na porta 3000
server.listen(888)


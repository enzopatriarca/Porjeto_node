const express = require("express")
const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))

app.use(express.json())
app.get("/",(req,res) =>{
    res.render("second")
})

app.get("/ejs/:nome/:lang",(req,res) =>{
    // res.send('Welcome')
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMSG = false

    var produtos =[
        {nome:"doritos",preco:10.99},
        {nome:"Coca-cola",preco:8.50},
        {nome:"carne moida",preco:22.00},

    ]
    

    res.render("ejs",{
        nome,lang,
        msg: exibirMSG,
        produtos:produtos,
    })
})


app.listen(4000,()=>{
    console.log('App rodando')
})


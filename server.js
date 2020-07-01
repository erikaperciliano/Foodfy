const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const server = express();
const  conteudos = require("./data");




server.use(express.static('public'));
server.use(routes);

server.set('view engine', 'njk');

nunjucks.configure("views", {
    express: server,
    autoescape: false, //interpreta link html
    noCache:true
});


server.get('/', function(req, res){

    return res.render('index', {items: conteudos});
;})

server.get('/about', function(req, res){

    return res.render("about");
})

server.get('/recipes', function(req, res){

    return res.render("recipes", {items: conteudos});
})

server.get('/details/:index', function(req, res){
    const recipeIndex = req.params.index;
    return res.render('details', {items: conteudos[recipeIndex]})
})


/*routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
rroutes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita*/



server.listen('5001', function(){
    console.log('Server is runing...');
})
const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const methodOverride = require ('method-override')

const server = express();
//const  conteudos = require("./data");



server.use(express.urlencoded({extended:true})) // responsible for running req.body
server.use(express.static('public'));
server.use(methodOverride('_method'));//preciso sobrescrever antes de mandar para rota
server.use(routes);


server.set('view engine', 'njk');

nunjucks.configure("views", {
    express: server,
    autoescape: false, //interpreta link html
    noCache:true
});


/*server.get('/', function(req, res){

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
})*/

server.listen('5001', function(){
    console.log('Server is runing...');
})
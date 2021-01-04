const express = require('express');
const routes = express.Router();
const recipes = require('./admin/recipes');



routes.get("/", function(req, res){
    return res.redirect('/admin/recipes');
})

routes.get("/admin/recipes", recipes.index); 

routes.get("/admin/recipes/create", recipes.create); 

routes.post("/admin/recipes", recipes.post); 

routes.get("/admin/recipes/:id", recipes.show); 

routes.get("/admin/recipes/:id/edit", recipes.edit); 

routes.put("/admin/recipes", recipes.put); 

routes.delete("/admin/recipes", recipes.delete); 


module.exports = routes;
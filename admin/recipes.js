const fs = require('fs');
const data = require('../data.json');
//const { send } = require('process');




exports.index = function(req, res){
    return res.render('admin/index', {admin: data.index});
}

exports.create = function(req, res){
    return res.render("admin/create", {admin: data.create}); 
}

exports.post = function(req, res){
   const keys = Object.keys(req.body)


   for(key of keys) {
       //req.body.key == ""
       if(req.body[key] == ""){
            return res.send('Please, fill all fields');
       }
       
   }

   let { img_recipe_url, title, author, ingredients, preration_mode, aditional} = req.body;

   const id = Number(data.recipes.length + 1);
  

   data.recipes.push({
    id,
    img_recipe_url, 
    title,
    author,
    ingredients, 
    preration_mode, 
    aditional
   })

   fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
       if(err) {
           return res.send("Write file error!")
       }else {
           return res.redirect('/admin/recipes')
       }
   });

    //return res.send(req.body);
}

exports.show = function(req, res){
    const { id } = req.params;

    const foundRecipes = data.recipes.find(function(recipes){
        return recipes.id == id;
    })

    if(!foundRecipes) {
        return res.send('Recipe not found!');
    }
        //return res.render('/admin/show'), {recipes: foundRecipes}
        
          return res.render('admin/show', {recipes:foundRecipes});
    

  
}
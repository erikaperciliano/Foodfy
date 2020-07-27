const fs = require('fs');
const data = require('../data.json');
//const { send } = require('process');




exports.index = function(req, res){
    return res.render('admin/index', {admin: data.recipes});
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

exports.edit = function(req, res){
    const { id } = req.params;

    const foundRecipes = data.recipes.find(function(recipes){
        return recipes.id == id;
    })

    if(!foundRecipes) {
        return res.send('Recipe not found!');
        
    }

    return res.render('admin/edit', {recipes:foundRecipes});
}

exports.put = function(req, res){
    const { id } = req.body;

    let index = 0;
    const foundRecipes = data.recipes.find(function(recipes, foundIndex){
        if(id == recipes.id){
            index = foundIndex;
            return true;
        }
        
    })

    if(!foundRecipes) {
        return res.send('Recipe not found!');
    }

    const recipe = {
        ...foundRecipes,
        ...req.body
    }

   data.recipes[index] = recipe;
   //atualiza o data.json
   fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
       if(err){
           return res.send('Write error!')
       }else {
           return res.redirect(`/admin/recipes/${id}`);
       }
   })
}

exports.delete = function(req, res){
    const {id} = req.body;

    const filteredRecipes = data.recipes.filter(function(recipe){
        return recipe.id != id;
    })

    data.recipes = filteredRecipes;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if(err){
            return res.send('Write file error!')
        }else {
            res.redirect('admin/recipes');
        }
    })
}
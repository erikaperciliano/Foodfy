const fs = require('fs');
const data = require('../data');




exports.index = function(req, res){
    return res.render('admin/index', {admin: data.index});
}

exports.create = function(req, res){
    return res.render("admin/create", {admin: data.create}); 
}

exports.post = function(req, res){
    return res.send('Recebido!');
}
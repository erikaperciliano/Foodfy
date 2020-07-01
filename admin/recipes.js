const fs = require('fs');
const data = require('../data');



/*exports.index = function(req, res){
    return res.render('instructors/index', {instructors: data.instructors});
}*/

exports.index = function(req, res){
    return res.render('admin/index', {admin: data.index});
}


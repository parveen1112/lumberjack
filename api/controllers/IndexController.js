'use strict';

var BaseController = require('./BaseController');


var IndexController = BaseController.extend({
    index: function(req, res){
        return res.view('index');
    }
});

module.exports = IndexController;
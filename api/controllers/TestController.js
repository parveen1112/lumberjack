'use strict';

var BaseController = require('./BaseController');


var TestController = BaseController.extend({
    index: function(req, res){
        return res.view('test');
    }
});

module.exports = TestController;
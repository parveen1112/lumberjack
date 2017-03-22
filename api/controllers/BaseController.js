'use strict';

var BaseController = function() {};

// Add default behaviours to the controllers
BaseController.prototype.index = function(req, res) {
    res.ok();
};

BaseController.extend = function(object) {
    return _.extend({}, BaseController.prototype, object);
};

module.exports = BaseController;
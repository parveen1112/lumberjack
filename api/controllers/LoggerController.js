/**
* Created by Parveen Arora on 25/12/15.
*/

'use strict';

var BaseController = require('./BaseController');
function Response() {
    this.success = 'false';
    this.message = [];
};

function getHost(data){
    var host;
    if (data) {
        host = data.host;
    }
    return host;
}
var LoggerController = BaseController.extend({
    addError: function(req, res){
        var data = req.body.data,
            resp = new Response();git
                LoggerService.add(data, function(err, list){
                   if (list) {
                       resp.success = true;
                       resp.message.push('Ok');
                   } else {
                       resp.message.push(err ? err.message : 'Error while adding');
                   }
                   res.json(resp);
                });
    },
    getHosts: function(req, res) {
        LoggerService.findHosts(function(err, hosts){
            var resp = new Response(),
                msg;
            if (err){
                msg = err ? err.message : "Not able to connect";
                resp.message.push(msg);
            } else if (!hosts) {
                resp.message.push("No hosts available")
            } else {
                resp.message.push("OK");
                resp.success = true;
                resp.data = hosts;
            }
            res.json(resp)
        });
    },
    getErrorByHost: function(req, res) {
        var host = req.query.host;
        LoggerService.findByHost({name: host}, function(err, errorList){
            var resp = new Response(),
                msg;
            if (err){
                msg = err ? err.message : "Not able to connect";
                resp.message.push(msg);
            } else if (!errorList) {
                resp.message.push("No Error for this host")
            } else {
                resp.message.push("OK");
                resp.success = true;
                resp.data = errorList;
            }
            res.json(resp)
        });

    },
    getErrors : function(req, res) {
      LoggerService.getErrors(function(err, errorList){
          var resp = new Response(),
              msg;
          if (err || !errorList) {
              msg = err ? err.message : "No Errors";
              resp.message.push(msg);
          } else {
              resp.message.push("OK");
              resp.success = true;
              resp.data = errorList;
          }
          res.json(resp);
      });
    }
});

module.exports = LoggerController;
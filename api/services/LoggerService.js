/**
* Created by Parveen Arora
* This service is specific to Error Model
*/
module.exports = {
    findHosts: function(cb) {
       Host.find().exec(function(err, hosts){
           cb(err, hosts);
       })
    },
    findByHost :  function(obj, cb) {
        ErrorList.find().where({host : obj.name}).exec(function (err, errorList) {
            return cb(err, errorList);
        });
    },
    add : function (obj, cb) {
        ErrorList.create(obj).exec(function(err, user){
            cb(err, user);
        });
    },
    addHost: function(hostname, cb) {
        var obj = {
            name : hostname || 'unknown'
        };
        Host.findOne(obj).exec(function(err, host){
            if (!host){
                Host.create(obj).exec(function(err, host){
                    cb(err, host);
                });
            }
        });
    },
    getErrors: function(cb) {
        ErrorList.find().exec(function(err, errorList){
           cb(err, errorList);
        });
    }
};
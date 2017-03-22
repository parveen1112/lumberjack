/**
 * Created by Parveen Arora on 25/12/15.
 */

'use strict';

var BaseController = require('./BaseController');
function Response() {
    this.success = 'false';
    this.message = [];
};

var AuthController = BaseController.extend({
    add: function (req, res) {
        var requestBody = req.body;
        AuthService.add(requestBody.name, requestBody.email, requestBody.password, requestBody.username, function(err, user){
            var responseObject = new Response();
            if (err){
                var msg = err ? err.message : "User Not Added";
                responseObject.message.push(msg);
            } else {
                responseObject.message.push('OK');
                responseObject.success = true;
            }
            res.json(responseObject);
        });
    },
    login : function(req, res) {
        var requestBody = req.body;
        AuthService.findByEmail(requestBody.email, function(err, user){
            var responseObject = new Response();
            if (err || !user) {
                responseObject.message.push(err ? err.message : "User Doesn't Exist");
            } else {
                AuthService.verifyPassword(user, requestBody.password, function(err, user){
                    if (err) {
                        responseObject.message.push(err.message);
                    } else {
                        if (user.checkLoggedInStatus()) {
                            responseObject.message.push("Already Logged In");
                        } else {
                            responseObject.message.push('OK');
                            responseObject.success = true;
                            //user.setLoggedInStatus(true);
                            req.session.authenticated = true;
                            req.session.userToken = user.id;
                            req.session.username = user.username;
                        }
                    }
                });
            }
            res.json(responseObject);
        });
    },
    logout : function(req, res){
        var userId = req.session.userToken;
        AuthService.findById(userId, function(err, user){
            if (err || !user) {
                responseObject.message.push(err ? err.message : "Something Went Wrong");
                return res.serverError();
            } else {
                user.setLoggedInStatus(false);
                AuthService.removeSession(req);
                res.redirect('/');
            }
        })
    },
    getLoginView : function(req, res){
        res.view('login');
    },
    signupView : function(req, res){
        res.view('signup');
    }
});

module.exports = AuthController;
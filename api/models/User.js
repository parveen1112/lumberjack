var bcrypt = require('bcryptjs'),
    uuid = require('node-uuid'),
    SALT_WORK_FACTOR = 10;

module.exports = {
    attributes : {
        name : {
            type: 'string'
        },
        email : {
            type: 'string'
        },
        password : {
            type: 'string'
        },
        username : {
            type: 'string',
            unique: true
        },
        loggedIn : {
            type: 'boolean',
            defaultsTo : 'false'
        },
        verifyPassword: function (password) {
            return bcrypt.compareSync(password, this.password);
        },

        changePassword: function(newPassword, cb){
            this.newPassword = newPassword;
            this.save(function(err, u) {
                return cb(err,u);
            });
        },

        toJSON: function() {
            var obj = this.toObject();
            return obj;
        },

        setLoggedInStatus : function(status){
            this.loggedIn = status;
            this.save(function(err, u) {
                if(err) {
                    sails.log.error('User->setloggedInStatus Not able to set logged in status');
                }
            });
        },

        checkLoggedInStatus : function(){
            return this.loggedIn;
        }
    },

    beforeCreate: function (attrs, cb) {
        bcrypt.hash(attrs.password, SALT_WORK_FACTOR, function (err, hash) {
            attrs.password = hash;
            return cb();
        });
    },

    beforeUpdate: function (attrs, cb) {
        if(attrs.newPassword){
            bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
                if (err) return cb(err);

                bcrypt.hash(attrs.newPassword, salt, function(err, crypted) {
                    if(err) return cb(err);

                    delete attrs.newPassword;
                    attrs.password = crypted;
                    return cb();
                });
            });
        }
        else {
            return cb();
        }
    }
};
/**
 * Created by Parveen Arora
 * This service is specific to User Model
 * @type {{findById: Function, findByUsername: Function, findByEmail: Function, verifyPassword: Function, add: Function}}
 */
module.exports = {
    /**
     * Find user by id
     *
     * @param id - User ID
     * @param cb - CallBack function
     * @return Error and/or User itself
     */
    findById :  function(id, cb) {
        User.findOne(id).exec(function (err, user) {
            return cb(err, user);
        });
    },

    /**
     * Find user by username
     *
     * @param u - User username
     * @param cb - CallBack function
     * @return Error and/or User itself
     */
    findByUsername :  function(u, cb) {
        User.findOne({username: u}).exec(function (err, user) {
            return cb(err, user);
        });
    },

    /**
     * Find user by email
     *
     * @param e - User email
     * @param cb - CallBack function
     * @return Error and/or User itself
     */
    findByEmail : function(e, cb) {
        User.findOne({email: e}).exec(function (err, user) {
            return cb(err, user);
        });
    },

    /**
     * Check the UserPassword
     *
     * @param user - User itself
     * @param password - Password to check
     * @param cb - CallBack function
     * @return Error, User, Message
     */
    verifyPassword :  function(user, password, cb) {
        return (user.verifyPassword(password))  ? cb(null, user)
            : cb(new Error('Invalid Password'), null);
    },

    /**
     *
     * @param name
     * @param email
     * @param password
     * @param username
     * @param cb - CallBack function
     */
    add : function (name, email, password, username, cb) {
        User.create({
            name : name,
            email: email,
            password: password,
            username: username
        }).exec(function(err, user){
            cb(err, user);
        });
    },
    /**
     *
     * @param req
     */
    removeSession : function(req){
        req.session.authenticated = null;
        req.session.userToken = null;
        req.session.username = null;

        delete req.session.authenticated;
        delete req.session.userToken;
        delete req.session.username;
    }

};
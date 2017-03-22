module.exports = {
    attributes : {
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        username: {
            type: 'string',
            unique: true
        },
        loggedIn: {
            type: 'boolean',
            defaultsTo: 'false'
        }
    }
}
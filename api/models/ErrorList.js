module.exports = {
    attributes : {
        name: {
            type: 'string',
            defaultsTo: ''
        },
        mode: {
            type: 'string',
            defaultsTo: ''
        },
        message: {
            type: 'string',
            defaultsTo: ''
        },
        frames: {
            type: 'array'
        },
        type: {
            type: 'string',
            enum: ['4XX', '5XX', 'JS'],
            defaultsTo: 'JS'
        },
        browser : {
            type: 'string',
            defaultsTo: ''
        },
        host : {
            model : 'Host'
        }
    }
}
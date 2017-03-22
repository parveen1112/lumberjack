require.config({
    paths: {
        jquery: 'vendor/jquery/jquery.min',
        text: 'vendor/requirejs-text/text',
        bootstrapJS: 'vendor/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
    },
    /* -------------------- DO NOT DELETE BELOW COMMENT --------------------------------- */
    //{ADD MODULES FOR BUILD}
    packages: [{
        name: 'bootstrap',
        location: 'bootstrap'
    }],
    deps: ['bootstrap'],
    callback: function() {}
});


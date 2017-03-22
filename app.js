/**
 * app.js
 *
 * Use `app.js` to run your app without `sails lift`.
 * To start the server, run: `node app.js`.
 *
 * This is handy in situations where the sails CLI is not relevant or useful.
 *
 * For example:
 *   => `node app.js`
 *   => `forever start app.js`
 *   => `node debug app.js`
 *   => `modulus deploy`
 *   => `heroku scale`
 *
 *
 * The same command-line arguments are supported, e.g.:
 * `node app.js --silent --port=80 --prod`
 */


// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually lift from.
// > Note: This is not required in order to lift, but it is a convenient default.
process.on('uncaughtException', function(err){
    console.log('uncaughtException===' + err);
    console.error(err.toErrString? err.toErrString() : err.stack);
});


process.on('unhandledRejection', function(err, p){
    console.error("Unhandled Rejection at: Promise ", p, " reason: ", err.stack);
});

process.chdir(__dirname);

(function(){
// Attempt to import `sails`.
    var sails;
    try {
        sails = require('sails');
    } catch (e) {
        console.error('To run an app using `node app.js`, you usually need to have a version of `sails` installed in the same directory as your app.');
        console.error('To do that, run `npm install sails`');
        console.error('');
        console.error('Alternatively, if you have sails installed globally (i.e. you did `npm install -g sails`), you can use `sails lift`.');
        console.error('When you run `sails lift`, your app will still use a local `./node_modules/sails` dependency if it exists,');
        console.error('but if it doesn\'t, the app will run with the global sails instead!');
        return;
    }

// --•
// Try to get `rc` dependency (for loading `.sailsrc` files).
    var rc;
    try {
        rc = require('rc');
    } catch (e0) {
        try {
            rc = require('sails/node_modules/rc');
        } catch (e1) {
            console.error('Could not find dependency: `rc`.');
            console.error('Your `.sailsrc` file(s) will be ignored.');
            console.error('To resolve this, run:');
            console.error('npm install rc --save');
            rc = function () { return {}; };
        }
    }
    if (process.env.NODE_CLUSTERS) {
        var cluster = require('cluster');
        var os = require('os');
        var numCPUs = os.cpus().length;

        global.JBGLOBALS.hostname = os.hostname();

        // create the server
        if (cluster.isMaster) {
            for (var i = 0; i < numCPUs; i++) {
                cluster.fork();
            }
            cluster.on('exit', function (worker, code, signal) {
                console.log('worker %d died (%s). restarting...', worker.process.pid, signal || code);
                cluster.fork();
            });
        } else {
            // Start server
            sails.lift(rc('sails'));
            console.log('This is a worker!');
        }
    } else {
        sails.lift(rc('sails'));
    }

    sails.on('lifted', function(){
        sails.log.info('--------------------------------------------------------');
        sails.log.info(('Lumberjack is runing in `' + sails.config.appPath + '`'));
        sails.log('Environment : ' + sails.config.environment);
        sails.log.info(('To see your app, visit ' + (sails.getBaseurl() || '')));
        sails.log.blank();
        sails.log.info(new Date());
        sails.log.blank();

        // Only log the host if an explicit host is set
        if (sails.getHost()) {
            sails.log.info('Host        : ' + sails.getHost()); // 12 - 4 = 8 spaces
        }
        sails.log.info('Port        : ' + sails.config.port); // 12 - 4 = 8 spaces
        sails.log.info('--------------------------------------------------------');
    })
})();

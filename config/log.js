/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#/documentation/concepts/Logging
 */

var winston = require('winston'),
    stamp = "JB:LOGS:",
    stampLength = stamp.length,
    timeStampFormat = "YYYY-MM-DDTHH:mm:ss.SSSZ",
    moment = require('moment');
require('winston-daily-rotate-file');
function logTemplate(level, meta, message){
    return "{" +
        "\"timestamp\" : \"" + moment().format(timeStampFormat) + "\" ," +
        "\"level\" : \"" + level + "\"," +
        meta +
        "\"content\" :" + message +
        "}";
}

function formatter(args) {
    var message = "";
    var metaString = "";
    var datum;
    var meta = {};

    if((datum = args.message.indexOf(stamp)) > -1){ //Initialization and condition at once
        metaString = args.message.slice(0,datum); // currently holding the meta part
        message = args.message.slice(datum + stampLength); // grabbing the message
        try {
            meta = JSON.parse(metaString);
        } catch (e) {
            metaString = "\"LOGGER_ERROR\" : \"INVALID META STRING\"";
            message = JSON.stringify(args.message); // Dumping and serializing original string
            return logTemplate(args.level, metaString, message);
        }
        metaString = "";  // reset metaString, now need to populate with hacked values
        if(meta.reqId) {
            metaString += "\"reqId\" : \"" + meta.reqId + "\", ";
        }
        if(meta.sessionId) {
            metaString += "\"sessionId\" : \"" + meta.sessionId + "\", ";
        }
        if(meta.tId) {
            metaString += "\"tId\" : \"" + meta.tId + "\", ";
        }
    } else {
        message = JSON.stringify(args.message);
    }

    return logTemplate(args.level, metaString, message);
}



var logFileLocation = (process.env.NODE_ENV === 'production') ? '/var/log/lumberjack/' : './logs/';


var customLogger = new winston.Logger({
    exitOnError: false,
    transports: [
        new (winston.transports.Console)({
            formatter: formatter
        }),
        new (winston.transports.DailyRotateFile)({
            name: 'verbose-file',
            level: 'info',
            json: false,
            dirname: logFileLocation,
            filename: 'lumberjack.log',
            formatter: formatter
        })
    ]
});

module.exports.log = {

    /************************   ***************************************************
     *                                                                          *
     * Valid `level` configs: i.e. the minimum log level to capture with        *
     * sails.log.*()                                                            *
     *                                                                          *
     * The order of precedence for log levels from lowest to highest is:        *
     * silly, verbose, info, debug, warn, error                                 *
     *                                                                          *
     * You may also set the level to "silent" to suppress all logs.             *
     *                                                                          *
     ***************************************************************************/
    level: 'info',
    colors: false,
    json: false,
    custom: customLogger,
    noShip: true
};

const Log = require('../models/Log');

// we could use morgan here, but I was asked to minimize the amount of packages
class Logger {
    constructor(){}
    logEvent(event) {
        const date = new Date().toISOString();
        console.log(`${event} : ${date}`);
        Log.saveEvent({ event, date });
    }
}

module.exports = new Logger();
const Log = require('../models/Log');

module.exports = class LogController {
    static getLogList() {
        return Log.getList();
    }
}

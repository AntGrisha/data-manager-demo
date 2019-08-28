const Data = require('../models/Data');
const logger = require('../utils/logger');


module.exports = class DataController {
    static getDataList() {
        return Data.getList();
    }
    static async create(data) {
        const dataItem = await Data.create(data);
        logger.logEvent('dataAdded');
        return dataItem;
    }
}

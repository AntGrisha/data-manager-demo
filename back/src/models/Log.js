const uuid = require('uuid');
const Promise = require('bluebird');
const redisClient = require('../config/db');

module.exports = class Log {
    static async getList() {
        const keys = await redisClient.keysAsync('log:*');
        return await Promise.map(keys, key => redisClient.getAsync(key).then(val => JSON.parse(val)), { concurrency: 5 });
    }

    static async saveEvent(event) {
        const id = uuid.v4();
        await redisClient.set(`log:${id}`, JSON.stringify(event));
        return { id, ...event };
    }
}

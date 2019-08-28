const uuid = require('uuid');
const Promise = require('bluebird');
const redisClient = require('../config/db');

module.exports = class Data {

    static async create(data) {
        const id = uuid.v4();
        const createdAt = new Date().toISOString();
        await redisClient.set(`data:${id}`, JSON.stringify(data));
        return { id, createdAt, ...data };
    }

    static async getList() {
        const keys = await redisClient.keysAsync('data:*');
        return await Promise.map(keys, key => redisClient.getAsync(key).then(val => JSON.parse(val)), { concurrency: 5 });
    }
}

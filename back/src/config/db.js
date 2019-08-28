const redis = require('redis');
const bluebird = require("bluebird");
bluebird.promisifyAll(redis);

// for demo app this can be hold here
const redisConfig = {
    url: 'redis://127.0.0.1',
    port: 6379
}

const client = redis.createClient(`${redisConfig.url}:${redisConfig.port}`);

client.on('connect', () => {
    console.log('Connected to redis');
});

client.on('error', err => {
    console.log(`Error: ${err}`);
});

module.exports = client;

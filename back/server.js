const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const appConfig = require('./src/config/app');
const router = require('./src/router');

async function createApp() {

    const app = express();

    // for development purposes
    app.use(cors());
    app.use(express.static('public'));

    app.get('/', (req, res) => res.sendFile(path.resolve('index.html')));

    app.use(bodyParser.json());
    app.use(router);

    return app;
}

async function startServer() {
    const app = await createApp();
    console.log(`Starting server on port ${appConfig.port}`);
    app.listen(appConfig.port);
}

startServer();

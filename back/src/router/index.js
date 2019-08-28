const router = require('express-promise-router')();
const DataController = require('../controller/DataController');
const LogController = require('../controller/LogController');
const logger = require('../utils/logger');

// route for saving login event
router.post('/api/login',
    async (req, res) => {
        logger.logEvent('login');
        res.send();
    });

router.post('/api/data',
    async (req, res) => res.json(await DataController.create(req.body)));

router.get('/api/data',
    async (req, res) => res.json(await DataController.getDataList()));

router.get('/api/logs',
    async (req, res) => res.json(await LogController.getLogList()));

module.exports = router;
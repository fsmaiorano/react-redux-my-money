const express = require('express');

module.exports = (server) => {

    //URL Routes
    const router = express.Router();
    server.use('/api', router);

    //BillingCycles Routes
    const billingCycle = require('../api/billingCycle/billingCycleService');
    billingCycle.register(router, '/billingCycles')

}
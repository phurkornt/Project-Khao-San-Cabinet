const express = require('express');


const handler_login = require('../handlers/handler_login')
const handler_dashboard = require('../handlers/handler_dashboard')
const login = require('../handlers/handler_login')


const router = express.Router();


router.get('/dashboard', handler_dashboard.getDashboard);
router.get('/', login.getLogin);


module.exports = router;
const express= require('express');
const { home } = require('../Controller/userController');

const router = express.Router();

const userRoutes = require('./')

router.get('/', home);

module.exports = router;

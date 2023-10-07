const express= require('express');
const { home, createUser } = require('../Controller/userController.js');

const router = express.Router();

router.get('/', home);
router.post("/createUser", createUser);

module.exports = router;

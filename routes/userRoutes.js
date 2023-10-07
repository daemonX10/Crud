const express= require('express');
const { home, createUser, getUser } = require('../Controller/userController.js');

const router = express.Router();

router.get('/', home);
router.post("/createuser", createUser);
router.get('/getuser',getUser);

module.exports = router;

const express = require('express');
const router = express.Router();
import AuthController from './controllers/authController';


router.post('/register', AuthController, registerUser);



module.exports = router;
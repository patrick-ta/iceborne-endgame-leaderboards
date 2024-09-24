const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/check-auth', authMiddleware.verifyToken, (req, res) => {
});

module.exports = router;
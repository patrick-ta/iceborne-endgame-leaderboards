const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/check-auth', authMiddleware.verifyToken, (req, res) => {
});

router.get('/check-role', authMiddleware.verifyRole, (req, res) => {
});

module.exports = router;
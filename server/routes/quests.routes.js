const express = require('express');
const questModel = require('../models/quest.model');

const router = express.Router();

router.get('/get-quests', async (req, res) => {
    const quests = await questModel.getQuests();
    console.log(quests);
    res.send(quests);
});

module.exports = router;
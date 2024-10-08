const express = require('express');
const speedrunModel = require('../models/speedrun.model');
const questModel = require('../models/quest.model');

const router = express.Router();

router.post('/get-speedruns', async (req, res) => {
    const { questNameParam } = req.body;
    const questName = await questModel.getQuestFromParam(questNameParam);
    const speedruns = await speedrunModel.getSpeedruns(questName);
    res.send(speedruns);
});

router.post('/submit', async (req, res) => {
    try {
        const { runner, time, link, weapon, quest, ruleset } = req.body;
        const speedrun = await speedrunModel.createSpeedrun(runner, time, link, weapon, quest, ruleset);
        console.log(speedrun);
        res.status(201).send(speedrun);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Error signing up' });
    }
});

module.exports = router;
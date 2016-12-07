import express from 'express';
import Validator from 'validatorjs';

const router = new express.Router();

router.get('/category', async function(req, res) {
    res.json(await req.db.filter.findCategories());
});

router.get('/team/male', async function(req, res) {
    res.json(await req.db.filter.findMaleTeams());
});

router.get('/team/female', async function(req, res) {
    res.json(await req.db.filter.findFemaleTeams());
});

router.get('/event', async function(req, res) {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const teamIds = req.body.teamIds;

    // startDate and endDate should be of type Date.

    const events = await req.db.filter.findFilteredEvents(startDate, endDate, teamIds);

    res.json(events);
});

export default router;

import express from 'express';
import Validator from 'validatorjs';

const router = new express.Router();

router.get('/', async function(req, res, next) {
    const year = req.query.year;
    const week = req.query.week;
    const teamIds = req.query.teamIds;

    let events = null;

    try {
        events = await req.db.filter.findFilteredEvents(year, week, teamIds);
    } catch(err) {
        return next(err);
    }

    res.json(events);
});

router.get('/category', async function(req, res) {
    res.json(await req.db.filter.findCategories());
});

router.get('/team/male', async function(req, res) {
    res.json(await req.db.filter.findMaleTeams());
});

router.get('/team/female', async function(req, res) {
    res.json(await req.db.filter.findFemaleTeams());
});

export default router;

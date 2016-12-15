import express from 'express';
import Validator from 'validatorjs';

const router = new express.Router();

router.get('/', async function(req, res, next) {
    const {
        year,
        week,
        teamIds
    } = req.query;

    res.json(await req.db.filter.findFilteredEvents(year, week, teamIds));
});

router.post('/add', async function(req, res, next) {
    const {
        team_id,
        t1,
        t2,
        description,
    } = req.body;

    const event_id = await req.db.filter.addEvent(team_id, t1, t2, description);

    res.json({
        event_id,
    });
});

router.get('/category', async function(req, res) {
    res.json(await req.db.filter.findCategories());
});

router.get('/team/category/:id', async function(req, res) {
    res.json(await req.db.filter.findTeamsForCategoryId(req.params.id));
});

router.get('/team/male', async function(req, res) {
    res.json(await req.db.filter.findMaleTeams());
});

router.get('/team/female', async function(req, res) {
    res.json(await req.db.filter.findFemaleTeams());
});

export default router;

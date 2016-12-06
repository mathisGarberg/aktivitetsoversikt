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

export default router;

import express from 'express';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import Validator from 'validatorjs';

const router = new express.Router();

function login(req, res, next) {
    passport.authenticate('local', async (err, user, info) => {
        if (err) return next(err);

        await req.promise.login(user, {});

        delete user.password;

        res.json({
            user,
        });
    })(req, res, next);
}

router.post('/register', async function(req, res) {
    const validation = Validator(req.body, {
        full_name: 'required|between:5,20',
        username: 'required|username_available|between:3,20',
        password: 'required|confirmed|min:5',
    });

    if (await validation.promise.fails()) {
        res.json({
            errors: validation.errors(),
        });
        return;
    }

    const role_id = 1;

    try {
        await req.db.user.add(
            role_id,
            req.body.full_name,
            req.body.username,
            req.body.password
        );
    } catch (err) {
        res.json({
            err: "User couldn't be registered due to an error.",
        });
        return;
    }

    login(req, res, next);
});

router.post('/login', async function(req, res, next) {
    const validation = Validator(req.body, {
        username: 'required|username_exists|between:3,20',
        password: 'required|min:5',
    });

    if (await validation.promise.fails()) {
        res.json({
            errors: validation.errors(),
        });
        return;
    }

    login(req, res, next);
});

router.get('/logout', async function(req, res, next) {
    req.logout();
    res.json({
        ok: true,
    });
});

export default router;

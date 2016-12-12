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

router.post('/register', async function(req, res, next) {
    try {
        const validation = new Validator(req.body, {
            email: 'required|email',
            phone: 'required',
            first_name: 'required|between:2,20',
            last_name: 'required|between:2,20',
            username: 'required|username_available|between:3,20',
            password: 'required|confirmed|min:5',
        });

        validation.setAttributeNames({
            email: 'Epost',
            phone: 'Telefonnummer',
            first_name: 'Fornavn',
            last_name: 'Etternavn',
            username: 'Brukernavn',
            password: 'Passord',
            password_confirmed: 'Gjenta passord',
        });

        validation.fails(() => {
            res.json(validation.errors);
        });

        validation.passes(async () => {
            const role_id = 1;

            await req.db.user.add(
                role_id,
                req.body.email,
                req.body.phone,
                req.body.first_name,
                req.body.last_name,
                req.body.username,
                req.body.password
            );

            login(req, res, next);
        });
    } catch(err) {
        next(err);
    }
});

router.post('/login', async function(req, res, next) {
    try {
        const validation = new Validator(req.body, {
            username: 'required|username_exists|between:3,20',
            password: 'required|min:5',
        });

        validation.setAttributeNames({
            username: 'Brukernavn',
            password: 'Passord',
        });

        validation.fails(() => {
            res.json(validation.errors);
        });

        validation.passes(() => {
            login(req, res, next);
        });
    } catch(err) {
        next(err);
    }
});

router.get('/logout', async function(req, res, next) {
    req.logout();
    res.json({
        ok: true,
    });
});

export default router;

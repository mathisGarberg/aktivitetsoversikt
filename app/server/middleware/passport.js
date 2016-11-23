import passport from 'passport';
import LocalStrategy from 'passport-local';

export default async (req, res, next) => {
    passport.use(new LocalStrategy(async function(username, password, done) {
        try {
            const user = req.db.user.findOne(username);

            if (!user)
                return done(null, false);

            const isValid = await req.db.user.validate(email, password);

            if (!isValid)
                return done(null, false);

            done(null, user);
        } catch (err) {
            done(err);
        }
    }));
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await req.db.user.findOneById(id);
            done(null, user);
        } catch(err) {
            done(err);
        }
    });
    next();
};

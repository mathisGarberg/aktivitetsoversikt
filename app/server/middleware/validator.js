import Validator from 'validatorjs';

export default async (req, res, next) => {
    Validator.registerAsync('username_exists', async function(username, attribute, required, passes) {
        const user = await req.db.user.findOne(username);

        if (user) {
            passes();
        } else {
            passes(false, "Denne brukeren finnes ikke.");
        }
    });

    Validator.registerAsync('username_available', async function(username, attribute, required, passes) {
        const user = await req.db.user.findOne(username);

        if (user) {
            passes(false, "Brukernavnet er tatt.");
        } else {
            passes();
        }
    });

    next();
};

import Validator from 'validatorjs';

export default async (req, res, next) => {
    Validator.registerAsync('username_available', async function(username, attribute, required, passes) {
        const user = await req.db.findOne(username);

        if (user) {
            passes();
        } else {
            passes(false, "Brukernavnet er tatt.");
        }
    });

    next();
};

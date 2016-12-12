import express from 'express';
import path from 'path';
import _ from 'lodash';
import fs from 'fs';

import auth from './auth';
import event from './event';

const router = new express.Router();

router.use('/auth', auth);
router.use('/event', event);

router.get('*', async (req, res) => {
    const userObject = req.user ? _.pickBy(req.user, (value, key) => key != 'password') : null;

    const html = (await fs.promise.readFile(path.join(__dirname, '/../../../public/index.html'), 'utf8'))
        .replace('{{ user }}', JSON.stringify(userObject));

    res.send(html);
});

export default router;

import express from 'express';
import path from 'path';

import auth from './auth';
import event from './event';

const router = new express.Router();

router.use('/auth', auth);
router.use('/event', event);

router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/../../../public/index.html'));
});

export default router;

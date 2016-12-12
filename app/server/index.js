import express from 'express';
import session from 'express-session';
import mysqlSession from 'express-mysql-session';
import bodyParser from 'body-parser';
import path from 'path';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import moment from 'moment';
import Validator from 'validatorjs';

import databaseMiddleware from './middleware/database';
import passportMiddleware from './middleware/passport';
import validatorMiddleware from './middleware/validator';

import routes from './routes';

moment.locale('nb');
Validator.useLang('nb_NO');

const app = express();

app.use('/public', express.static(path.join(__dirname, '/../../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'a9w8fua9w8efyaw87efaw97ef',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));
app.use(cookieParser());
app.use(databaseMiddleware);
app.use(validatorMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use(passportMiddleware);
app.use(routes);
app.use(function(err, req, res, next) {
    const status = err.status || 500;
    const message = err.toString();
    const trace = err.stack;

    console.log(trace);

    res.status(status);

    if (req.xhr) {
        res.json({
            err: { status, message, trace },
        });
    } else {
        res.send(`
            <h1>${status}</h1>
            <p>${message}</p>
            <pre>${trace}</pre>
        `);
    }
});

app.listen(3000, () => {
    console.log(`aktivitetsoversikt running at port 3000`);
});

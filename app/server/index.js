import express from 'express';
import session from 'express-session';
import mysqlSession from 'express-mysql-session';
import bodyParser from 'body-parser';
import path from 'path';
import cookieParser from 'cookie-parser';
import passport from 'passport';

import database from './middleware/database';
import passportMiddleware from './middleware/passport';

import routes from './routes';

const app = express();

app.use('/public', express.static(path.join(__dirname, '/../../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(database);
app.use(routes);
app.use(passport.initialize());
app.use(passport.session());
app.use(passportMiddleware);
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

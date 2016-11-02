import express from 'express';
import session from 'express-session';
import mysqlSession from 'express-mysql-session';
import bodyParser from 'body-parser';
import path from 'path';
import cookieParser from 'cookie-parser';

const app = express();

app.use('/public', express.static(path.join(__dirname, '../../../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen(3000, () => {
    console.log(`aktivitetsoversikt running at port 3000`);
});

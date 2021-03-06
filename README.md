# Aktivitetsoversikt (Activity overview)

The project consists of a server part and a client part. On the client side Vue.js is used and on the server side Express.js is used.

## Note
Commit [15e6e8f](https://github.com/mathisGarberg/aktivitetsoversikt/tree/15e6e8f8aec3f0aa91167da926fcf79b95907a42)
was the final commit before the deadline (12th of December 2016). Any commits after that are done outside the scope
of the assignment.

## Initial setup
* `git clone` the project
* Run `npm install` to install the dependencies
* Run `npm run build` to build the bundle.js file
* Create a database.json file in the root directory (same directory as this README-file)
* Run the project by running `node --harmony app.js`

The project requires that you have Node.js and MySQL installed on your machine.

Upon the first request the application will create a database table automatically with the same name
as the `database` field in the `database.json` file, so this should not be done manually.

The project is served at localhost:3000 by default.

## database.json structure
```json
{
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "aktivitetsoversikt"
}
```

## Admin user
| Username    | Password   |
| ------------|------------|
| admin       | fotball    |

The admin user will be added to the database automatically once it's created, so this user
can be used right off the bat. The admin user has elevated privileges compared to regualar users.

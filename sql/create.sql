CREATE TABLE user (
    id INTEGER NOT NULL AUTO_INCREMENT,
    role_id INTEGER NOT NULL,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(60) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    PRIMARY KEY(id),
    UNIQUE(username)
);

CREATE TABLE role(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id),
    UNIQUE(name)
);

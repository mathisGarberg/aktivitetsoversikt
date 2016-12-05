CREATE TABLE user (
    id INTEGER NOT NULL AUTO_INCREMENT,
    role_id INTEGER NOT NULL,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(60) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    PRIMARY KEY(id),
    UNIQUE(username)
);

CREATE TABLE role(
    id INTEGER NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id),
    UNIQUE(name)
);

/* Sport: Fotball, langrenn etc. */
CREATE TABLE category(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY(id),
    UNIQUE(name)
);

/* Lag: G13 Fotball, J14 Håndball etc. */
CREATE TABLE team(
    id INTEGER NOT NULL AUTO_INCREMENT,
    category_id INTEGER NOT NULL,
    gender CHAR(1) NOT NULL,
    year CHAR(2) NOT NULL,
    PRIMARY KEY(id) NOT NULL,
    FOREIGN KEY(category_id) REFERENCES category(id),
    UNIQUE(name)
);

/* Aktiviteter som vises i kalenderen */
CREATE TABLE event(
    id INTEGER NOT NULL AUTO_INCREMENT,
    team_id INTEGER NOT NULL,
    t1 TIMESTAMP NOT NULL, /* starttid */
    t2 TIMESTAMP NOT NULL, /* slutttid */
    description VARCHAR(100) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(team_id) REFERENCES team(id)
);

/* Fasilitet */
CREATE TABLE facility(
    id INTEGER NOT NULL AUTO_INCREMENT,
    field_name VARCHAR(50) NOT NULL,
    responsible VARCHAR(50) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(leader_id) REFERENCES leader(id)
);

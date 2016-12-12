INSERT INTO role(id, name) VALUES(1, 'Spiller');
INSERT INTO role(id, name) VALUES(2, 'Trener');
INSERT INTO role(id, name) VALUES(3, 'Lagleder');
INSERT INTO role(id, name) VALUES(4, 'Foresatt');
INSERT INTO role(id, name) VALUES(5, 'Admin');

INSERT INTO user(role_id, username, password, first_name, last_name, email, phone) VALUES(
    5,
    'admin',
    '$2a$10$4QUo.HfqKAqsbD/YW6Ashu1vg.P25je3RyI/YZx9CQoWJqnOrvKM6',
    'Admin',
    'Admin',
    'admin@aktivitetsoversikt.com',
    '+47 123 45 678'
);

INSERT INTO category(name) VALUES('Fotball');
INSERT INTO category(name) VALUES('Langrenn');
INSERT INTO category(name) VALUES('Skihopp');
INSERT INTO category(name) VALUES('Skiskyting');

/* Eksempler. Mange av disse kan fjernes senere, men noen
burde stå igjen slik at kalenderen ikke blir helt tom når man først
setter opp siden. */
INSERT INTO team(category_id, gender, year) VALUES(1, 'G', '13');
INSERT INTO team(category_id, gender, year) VALUES(2, 'G', '13');
INSERT INTO team(category_id, gender, year) VALUES(3, 'G', '14');
INSERT INTO team(category_id, gender, year) VALUES(4, 'G', '14');
INSERT INTO team(category_id, gender, year) VALUES(1, 'G', '15');
INSERT INTO team(category_id, gender, year) VALUES(2, 'G', '15');
INSERT INTO team(category_id, gender, year) VALUES(1, 'J', '13');
INSERT INTO team(category_id, gender, year) VALUES(2, 'J', '13');
INSERT INTO team(category_id, gender, year) VALUES(1, 'J', '14');
INSERT INTO team(category_id, gender, year) VALUES(2, 'J', '14');
INSERT INTO team(category_id, gender, year) VALUES(3, 'J', '15');
INSERT INTO team(category_id, gender, year) VALUES(4, 'J', '15');

/* Arrangement */
INSERT INTO event(team_id, t1, t2, description) VALUES(
    1,
    TIMESTAMP('2016-12-05', '16:00:00'),
    TIMESTAMP('2016-12-05', '18:00:00'),
    'Test 1'
);
INSERT INTO event(team_id, t1, t2, description) VALUES(
    2,
    TIMESTAMP('2016-12-06', '16:00:00'),
    TIMESTAMP('2016-12-06', '20:00:00'),
    'Test 2'
);
INSERT INTO event(team_id, t1, t2, description) VALUES(
    3,
    TIMESTAMP('2016-12-06', '17:00:00'),
    TIMESTAMP('2016-12-06', '21:00:00'),
    'Test 3'
);
INSERT INTO event(team_id, t1, t2, description) VALUES(
    4,
    TIMESTAMP('2016-12-07', '16:00:00'),
    TIMESTAMP('2016-12-06', '20:00:00'),
    'Test 4'
);
INSERT INTO event(team_id, t1, t2, description) VALUES(
    5,
    TIMESTAMP('2016-12-08', '16:00:00'),
    TIMESTAMP('2016-12-06', '20:00:00'),
    'Test 5'
);

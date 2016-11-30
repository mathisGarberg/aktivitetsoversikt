INSERT INTO role(name) VALUES('Spiller');
INSERT INTO role(name) VALUES('Trener');
INSERT INTO role(name) VALUES('Lagleder');
INSERT INTO role(name) VALUES('Foresatt');
INSERT INTO role(name) VALUES('Admin');

INSERT INTO user(role_id, username, password, full_name) VALUES(
    5,
    'admin',
    '$2a$10$4QUo.HfqKAqsbD/YW6Ashu1vg.P25je3RyI/YZx9CQoWJqnOrvKM6',
    'Administrator'
);

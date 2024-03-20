CREATE TABLE koalas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    favorite_color VARCHAR(50),
    age INTEGER,
    ready_for_transfer BOOLEAN DEFAULT FALSE,
    notes TEXT
);
INSERT INTO koalas (name, favorite_color, age, ready_for_transfer, notes) 
VALUES ('Koala 1', 'Brown', 5, true, 'This koala is ready for transfer.'),
       ('Koala 2', 'Gray', 3, false, 'This koala is not yet ready for transfer.'),
       ('Koala 3', 'Black', 4, true, 'This koala is ready for transfer.');

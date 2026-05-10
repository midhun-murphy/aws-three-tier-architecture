show DATABASES;

use ytdatabase;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO users (username, password, email) 
VALUES 
('John', 'John123#', 'john@example.com'),
('Midhun', 'Midhun123', 'midhun@example.com'),
('Kevin', 'Kevin123', 'kevin@example.com');

SELECT * FROM users;
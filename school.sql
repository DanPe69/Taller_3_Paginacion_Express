CREATE DATABASE school;
USE school;

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    grade VARCHAR(10)
);

INSERT INTO student (name, age, grade) VALUES
('Ana', 20, 'A'),
('Luis', 21, 'B'),
('María', 22, 'A'),
('Carlos', 23, 'C'),
('Sofía', 19, 'A'),
('Jorge', 24, 'B'),
('Laura', 20, 'C'),
('Pedro', 22, 'A'),
('Camila', 19, 'B'),
('Andrés', 25, 'C'),
('Valeria', 21, 'A'),
('Mateo', 20, 'B');

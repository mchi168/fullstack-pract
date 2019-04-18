

-- Create database

CREATE database grocery_list;

-- Use database

USE grocery_list;

-- Create table

CREATE TABLE IF NOT EXISTS groceries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  quantity INT NOT NULL
);


-- Insert sample item
INSERT INTO groceries (name, quantity) VALUES ('banana', 1);

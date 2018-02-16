DROP DATABASE IF EXISTS Bamazon;
CREATE database Bamazon;

USE Bamazon;

CREATE TABLE products (
  id INT AUTO_INCREMENT NOT NULL,
  item_name VARCHAR(45) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price DECIMAL(10,4) NULL,
  stock_inventory INT (10) NOT NULL,
  PRIMARY KEY (id)
);



SELECT*FROM Bamazon.products;

INSERT INTO products(item_name, department, price, stock_inventory)
    VALUES 
        ("Pitch Perfect DVD", "movies", 19.99, 10),
        ("Pitch Perfect 2 DVD","movies", 19.99, 10),
        ("Pitch Perfect 3 DVD","movies", 24.99, 30),
        ("Great Expectations", "books", 5.99, 20),
        ("Pilgrim's Progress", "books", 7.99, 3),
        ("Around the World in 80 Days", "books", 5.99, 8),
        ("LOL Doll", "toys", 12.99, 15),
        ("XL Hatchimal Egg","toys", 64.99, 23),
        ("Kate Spade Sunglasses","accessories", 99.00, 7),
        ("Kate Spade Purse","accessories", 499.00, 4),
        ("Kate Spade iPhone 7 Plus Case","accessories", 29.00, 10);
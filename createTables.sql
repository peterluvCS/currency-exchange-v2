create database IF NOT EXISTS currency_exchange;
use currency_exchange;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    role TINYINT(1) NOT NULL DEFAULT 0 COMMENT '1=admin, 0=regular',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO users (email, password_hash, username, role)
VALUES ('admin@example.com', 'hash123', 'superadmin', 1);

INSERT INTO users (email, password_hash, username)
VALUES ('user@example.com', 'hash456', 'regularuser');

CREATE TABLE currencies (
    id SERIAL PRIMARY KEY,
    iso_code CHAR(3) UNIQUE,
    `name` VARCHAR(100),
    country VARCHAR(100),
    symbol VARCHAR(5),
    is_active BOOLEAN DEFAULT TRUE
);

INSERT INTO currencies (iso_code, name, country, symbol, is_active) VALUES
('USD', 'US Dollar', 'United States', '$', TRUE),
('EUR', 'Euro', 'European Union', '€', TRUE),
('JPY', 'Japanese Yen', 'Japan', '¥', TRUE),
('GBP', 'British Pound', 'United Kingdom', '£', TRUE),
('AUD', 'Australian Dollar', 'Australia', 'A$', TRUE),
('CAD', 'Canadian Dollar', 'Canada', 'C$', TRUE),
('CHF', 'Swiss Franc', 'Switzerland', 'Fr', TRUE),
('CNY', 'Chinese Yuan', 'China', '¥', TRUE),
('INR', 'Indian Rupee', 'India', '₹', TRUE),
('MXN', 'Mexican Peso', 'Mexico', '$', TRUE),
('BRL', 'Brazilian Real', 'Brazil', 'R$', TRUE),
('RUB', 'Russian Ruble', 'Russia', '₽', TRUE),
('KRW', 'South Korean Won', 'South Korea', '₩', TRUE),
('SGD', 'Singapore Dollar', 'Singapore', 'S$', TRUE),
('TRY', 'Turkish Lira', 'Turkey', '₺', TRUE),
('ZAR', 'South African Rand', 'South Africa', 'R', TRUE),
('SEK', 'Swedish Krona', 'Sweden', 'kr', TRUE),
('NZD', 'New Zealand Dollar', 'New Zealand', 'NZ$', TRUE),
('HKD', 'Hong Kong Dollar', 'Hong Kong', 'HK$', TRUE),
('NOK', 'Norwegian Krone', 'Norway', 'kr', TRUE);

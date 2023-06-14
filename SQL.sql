CREATE DATABASE jambooker;

CREATE USER 'jambooker'@'localhost' IDENTIFIED BY 'jambooker';

GRANT ALL PRIVILEGES ON jambooker.* TO 'jambooker'@'localhost';
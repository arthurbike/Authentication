CREATE DATABASE IF NOT EXISTS dockerTeste;
USE dockerTeste;

CREATE TABLE IF NOT EXISTS teste (
	id int(10) NOT NULL auto_increment,
	nome varchar(15) NOT NULL,
	idade int(3) NOT NULL,
	primary key (id)
);

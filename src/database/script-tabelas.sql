-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE singularity;

USE singularity;


CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	senha VARCHAR(50) NOT NULL
);

CREATE TABLE quiz (
	id_quiz INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

insert into quiz (nome) values
	('Questionário Geral');

CREATE TABLE partida(
	id_partida int primary key auto_increment,
    fk_id_usuario int not null,
    fk_id_quiz int not null,
    pontuacao int,
    acertos int,
    erros int,
    foreign key (fk_id_usuario) 
		references usuario(id_usuario),
	foreign key (fk_id_quiz)
		references quiz(id_quiz)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);
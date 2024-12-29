models aqui

## Script PostgreSQL

CREATE TABLE Contas
(
	idConta INTEGER NOT NULL PRIMARY KEY,
	nome VARCHAR(30) NOT NULL,
	email VARCHAR(80) NOT NULL,
	senha VARCHAR(30) NOT NULL
)

CREATE TABLE Usuarios
(
	cpf CHAR(11) NOT NULL PRIMARY KEY,
	idConta INTEGER NOT NULL,
	FOREIGN KEY (idConta) REFERENCES Contas(idConta)
)

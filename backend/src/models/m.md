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

CREATE TABLE Emprestimo
(
	idEmprestimo INTEGER PRIMARY KEY,
	idLivro INTEGER NOT NULL,
	idReserva INTEGER,
	cpf INTEGER NOT NULL,
	dataInicio DATE NOT NULL,
	dataFim DATE NOT NULL,
	FOREIGN KEY (idLivro) REFERENCES Livro(idLivro),
	FOREIGN KEY (idReserva) REFERENCES Reserva(idReserva),
	FOREIGN KEY (cpf) REFERENCES Usuario(cpf)
)

CREATE TABLE Devolucao
(
	idEmprestimo INTEGER PRIMARY KEY,
	dataDevolucao DATE,
	FOREIGN KEY (idEmprestimo) REFERENCES Emprestimo(idEmprestimo),

)
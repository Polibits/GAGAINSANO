/*
TABELA: UserCredentials
DESCRIÇÃO: contém credenciais de login dos usuários. 
	->email: hash do email informado pelo usuário 
	->password: hash da string senha + salt.
	->salt: sequência gerada aleatoriamente 
O hash usado aqui é o SHA-256. 
*/
CREATE TABLE UserCredentials(
	email VARCHAR(64) NOT NULL, 
	password VARCHAR(64) NOT NULL,
	salt VARCHAR(64) NOT NULL
);
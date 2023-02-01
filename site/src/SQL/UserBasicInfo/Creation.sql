/*
TABELA: UserBasicInfo
DESCRIÇÃO: contém informações essenciais dos usuários. 
    ->ID: n ́umero que identifica unicamente cada usu ́ario dentro do sistema.
    ->name: nome completo do usuario
    ->preferedName: nome pelo qual o usuario deseja ser chamado.
    ->email: email associado à conta do usu ́ario
    ->subscriptionID: id do plano contratado pelo usuário.
    ->userType: tipo do usuario — aluno, professor, administrador ou visitante.
*/
CREATE TABLE UserBasicInfo(
    ID VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    preferedName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    subscriptionID VARCHAR(255) NOT NULL,
    userType VARCHAR(255) NOT NULL
);
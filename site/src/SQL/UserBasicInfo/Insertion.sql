/*
Inserir os parâmetros, sem deixar faltar nenhum:
-ID: identifica unicamente o usuário; ainda tem formato a ser definido pelo cliente
-name: nome completo do estudante, com primeiras letras maiúsculas
-preferedName: nome curto, pelo qual o estudante quer ser chamado, ou nome social, com primeiras letras maiúsculas
-email: email do usuário
-subscriptionID: ID do pacote contratado pelo usuário; ainda tem formato a ser definido pelo cliente
-userType admite os seguintes valores:
    (a) teacher
    (b) student
    (c) admin
    (d) visitant
*/

INSERT INTO UserBasicInfo(ID, name, preferedName, email, subscriptionID, userType) VALUES(
    "cffa7c43505013b3",
    "Henrique Eduardo dos Santos de Souza",
    "Henrique Eduardo",
    "henrique_eduardo_souza@hotmail.com",
    "3e4f82acb92a138b",
    "student"
);
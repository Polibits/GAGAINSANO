/*
Inserir as credenciais de login, passe o email e o conjunto senha + sal pelo hash  
Exemplo:
    email original: henrique_eduardo_souza@hotmail.com
    senha original: #minecraft123
    sal: f1nd1ngn3m0farm1990M0O

    hash(email): cffa7c43505013b322c4fc32dc62433f968f5533ded34ba88170b1cc7746edb2
    hash(senha + sal): ba7a83f79813e4f82acb92a138bb710dce41507b4a33615db86f2463e5908d6b
*/

INSERT INTO UserCredentials(email, password, salt) VALUES(
    "cffa7c43505013b322c4fc32dc62433f968f5533ded34ba88170b1cc7746edb2",
    "ba7a83f79813e4f82acb92a138bb710dce41507b4a33615db86f2463e5908d6b",
    "f1nd1ngn3m0farm1990M0O"
);
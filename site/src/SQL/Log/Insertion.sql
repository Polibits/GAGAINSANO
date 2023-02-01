/*
Inserir 
    -> data: formato DD-MM-AAAA H:M:S
    -> type: tipo de operação realizada:
        (a) cadastro de usuário
        (b) deleção de usuário
        (c) mudança de dados do usuário
        (d) login
        (e) logout
        (f) solicitação de assinatura
        (g) pagamento da assinatura
        (h) cancelamento de pagamento da assinatura
        (i) liberação de acesso a curso
        (j) bloqueio de acesso a curso
    ->description: descrição detalhada do que ocorreu
*/
INSERT INTO Log(date, type, description) VALUES (
    "18-11-2023 13:23:44",
    "login",
    "user: Henrique Eduardo dos Santos de Souza; id: cffa7c43505013b3; device: Windows 10, Chrome; location: próximo a São Paulo, Sao Paulo, Brasil"
);
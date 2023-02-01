/*
TABELA: Logs
DESCRIÇÃO: identifica cada operação realizada no sistema.
    ->date: data da operação
    ->type: tipo de operação realizada:
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

CREATE TABLE Log (
    date VARCHAR(64) NOT NULL,
    type VARCHAR(64) NOT NULL,
    description VARCHAR(255) NOT NULL
);


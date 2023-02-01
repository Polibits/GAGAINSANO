/*
TABELA: PaymentHistory
DESCRIÇÃO: controla os pagamentos das assinaturas do usuário
    -> packetName: nome do pacote oferecido, como “EXATAS FUVEST”, “MATEMATICA PARA IME/ITA”, “QUÍMICA PARA ESCOLA NAVAL” etc.
    -> packetID: n umero de identifica ̧c ̃ao de cada pacote
    -> price: preço de venda do pacote.
    -> solicitationDate: data em que o usuário solicitou o serviço.
    -> paidDate: data em que o pagamento foi confirmado.
    -> status: status do pagamento 
*/

CREATE TABLE PaymentHistory (
    packetName VARCHAR(64),
    packetID VARCHAR(64),
    price FLOAT,
    solicitationDate VARCHAR(64),
    paidDate VARCHAR(64),
    status VARCHAR(32)
);
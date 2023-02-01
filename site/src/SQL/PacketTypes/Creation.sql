/*
TABELA: PacketTypes
DESCRIÇÃO: identifica os planos dispon ıveis e seus serviços associados.
    ->packetName: nome comercial do pacote
    ->packetID: id do pacote
    ->Colunas à direita: podem conter os seguintes valores:
        (a) incluso
        (b) não incluso
        (c) experimental
*/
CREATE TABLE PacketTypes(
    packetName VARCHAR(64) NOT NULL UNIQUE,
    packetID VARCHAR(64) NOT NULL UNIQUE,
    GAGAINSANO_MILITARES VARCHAR(16) NOT NULL,
    GAGAINSANO_VESTIBULARES VARCHAR(16) NOT NULL,
    GAGAINSANO_OLIMPIADAS VARCHAR(16) NOT NULL,
    GAGAINSANO_ENSINOSUPERIOR VARCHAR(16) NOT NULL
);
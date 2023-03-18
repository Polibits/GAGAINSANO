/*
Resumo das funções:
    -CRIAÇÃO
        -createUser(fullName, userName, email, password, cpf)
    
    -LEITURA
        -getAllUsersInfo()
        -getUserInfoByID(ID)
        -getUserInfoByEmail(email)
        -authenticateUserCredentials(email, password)
        -getUserActivationStatus(ID)
        -checkUserActivationCode(ID)
    
    -MODIFICAÇÃO
        -updateUserInfo(ID, newInfo)
        -updateUserType(ID, newType)
        -activateUserAccount(ID)
    
    -DELEÇÃO
        -deleteUserByID()
        -deleteUserByEmail()
*/

class UserController {
    /* funções de criação */

    /**
     * cria um usuário no sistema
     * @param {string} fullName nome completo
     * @param {string} username nome de usuário
     * @param {string} email email
     * @param {string} password senha
     * @param {string} cpf cpf
     */
    static async createUser(fullName, username, email, password, cpf) {

    }

    /* funções de leitura */

    /**
     * obtém as informações básicas de todos os usuários
     * @returns {userInfo} uma lista com todos os usuários
     */
    static async getAllUsersInfo() {
        const request = await axios({
            method: 'get',
            url: 'http://localhost:5050/user/read/all'
        }).then(function(response) {
            return response.data;
        }).catch(function(error){
            console.log(error);
        });
        return request;
        return [
            {
                'id':'1',
                'fullName':'full name',
                'username':'username',
                'email':'email@email.com',
                'userType':'userType'
            },
            {
                'id':'2',
                'fullName':'full name 2',
                'username':'username 2',
                'email':'email2@email.com',
                'userType':'userType2'
            }
        ];
    }

    /**
     * obtém informações básicas do usuário
     * @param {string} ID
     */
    static async getUserInfoByID(ID) {
        
    }

    /**
     * obtém informações básicas do usuário
     * @param {string} email 
     */
    static async getUserInfoByEmail(email) {
        
    }

    /**
     * verifica se credenciais do usuário são válidas
     * @param {string} email email
     * @param {string} password senha
     */
    static async authenticateUserCredentials(email, password) {
        
    }

    /**
     * obtém o status de ativação da conta do usuário
     * @param {string} ID 
     */
    static async getUserActivationStatus(ID) {
        
    }

    /**
     * verifica se código de autenticação é válido
     * @param {string} ID 
     */
    static async checkUserActivationCode(ID) {
        
    }

    /* funções de modificação */

    /**
     * modifica informações do usuário
     * @param {string} ID id do usuário
     * @param {object} newInfo nova informação
     */
    static async updateUserInfo(ID, newInfo) {
        
    }

    /**
     * 
     * @param {string} ID 
     * @param {string} newInfo 
     */
    static async updateUserType(ID, newType) {
        
    }

    /**
     * 
     * @param {string} ID 
     */
    static async activateUserAccount(ID) {

    }

    /* funções de deleção */

    /**
     * 
     * @param {string} ID 
     */
    static async deleteUserByID(ID) {

    }

    /**
     * 
     * @param {string} email 
     */
    static async deleteUserByEmail(email) {

    }
}

module.exports = {
    UserController
}

/**
 * Receber Code(STRING)
 * Recuperar o acess_token no github
 * Verificar se o usuario existe no DB
 * ---- SIM = Gera um token
 * ---- NAO = Cria no DB, gera um token
 * Retornar o token com as infos do user
 */

class AuthenticateUserService {
    async execute(code: string){

    }


}

export { AuthenticateUserService }
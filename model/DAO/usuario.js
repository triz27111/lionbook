const { async } = require('effect/Stream')
const { PrismaClient } = require('../../generated/prisma')
const prisma = new PrismaClient()

const insertUsuario = async function (insertUsuario) {
    try {
        let  sql = ` insert into tbl_usuario(login, senha) values (${usuario.login}', '${usuario.senha}');`
    } catch (error) {
        
    }
    
}
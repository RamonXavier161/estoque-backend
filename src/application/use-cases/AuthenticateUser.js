// /src/application/use-cases/AuthenticateUser.js

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userRepository } from '../../infrastructure/repositories/UserRepository.js';

// ATENÇÃO: Em produção, o SECRET DEVE ser lido de uma variável de ambiente!
const SECRET = "SEU_SEGREDO_SUPER_SECRETO_AQUI"; 

export class AuthenticateUser {
    
    /**
     * Executa o caso de uso de autenticação (Login).
     */
    async execute({ nome, senha }) {
        
        const user = await userRepository.findByNome(nome); 

        if (!user) {
            throw new Error("Nome de usuário não encontrado.");
        }

        // Compara a senha enviada com a senha criptografada no DB
        const isPasswordValid = await bcrypt.compare(senha, user.senha);
        if (!isPasswordValid) {
            throw new Error("Senha incorreta.");
        }

        // Gera o token de autenticação
        // Aqui usamos o ID do usuário como payload
        const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "2h" });

        return {
            message: "Logado com sucesso",
            token,
            usuario: { id: user.id, nome: user.nome }
        };
    }
}
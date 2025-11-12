// /src/application/use-cases/RegisterUser.js

import { userRepository } from '../../infrastructure/repositories/UserRepository.js';

export class RegisterUser {
    
    /**
     * Executa o caso de uso de registro de novo usuário.
     */
    async execute({ nome, email, telefone, senha }) {
        
        // Regra de Negócio: Checa se o usuário já existe
        const existingUser = await userRepository.findByNome(nome);
        if (existingUser) {
            throw new Error("Usuário com este nome já existe.");
        }
        
        // Regra de Negócio: Validação básica da senha (Exemplo)
        if (senha.length < 6) {
             throw new Error("A senha deve ter no mínimo 6 caracteres.");
        }

        // Chama o Repositório para salvar (a criptografia acontece lá)
        const userId = await userRepository.save({ nome, email, telefone, senha });

        return { 
            message: "Usuário cadastrado com sucesso!", 
            userId 
        };
    }
}
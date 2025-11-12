// /src/apirest/controllers/UserController.js

import { AuthenticateUser } from '../../application/use-cases/AuthenticateUser.js';
import { RegisterUser } from '../../application/use-cases/RegisterUser.js';

// Instanciamos os Casos de Uso
const registerUser = new RegisterUser();
const authenticateUser = new AuthenticateUser();

export class UserController {
    
    // Método para POST /cadastrar
    static async register(req, res) {
        const { nome, email, telefone, senha } = req.body;
        try {
            // Delega para o Use Case e obtém o resultado do negócio
            const result = await registerUser.execute({ nome, email, telefone, senha });
            
            // 201 Created (Sucesso no cadastro)
            return res.status(201).json(result); 
        } catch (error) {
            // Trata erros de negócio (ex: usuário já existe)
            if (error.message.includes("já existe")) {
                return res.status(409).json({ message: error.message }); // 409 Conflict
            }
            // Trata erros genéricos
            console.error("Erro no registro de usuário:", error);
            return res.status(500).json({ message: "Erro interno ao cadastrar usuário" });
        }
    }

    // Método para POST /login
    static async login(req, res) {
        const { nome, senha } = req.body;
        try {
            // Delega para o Use Case
            const result = await authenticateUser.execute({ nome, senha });
            
            // 200 OK (Sucesso no login)
            return res.status(200).json(result); 
        } catch (error) {
            // Trata erros de autenticação (usuário/senha incorretos)
            if (error.message.includes("Usuário") || error.message.includes("Senha")) {
                return res.status(401).json({ message: error.message }); // 401 Unauthorized
            }
            // Trata erros genéricos
            console.error("Erro na autenticação:", error);
            return res.status(500).json({ message: "Erro interno ao fazer login" });
        }
    }
}
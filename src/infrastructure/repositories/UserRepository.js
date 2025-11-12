// /src/infrastructure/repositories/UserRepository.js

import bcrypt from "bcrypt"; // Necessário para salvar a senha criptografada
import { getConnection } from '../database/dbConnection.js';

class UserRepository {
    constructor() {
        this.tableName = "usuarios";
    }

    /**
     * Busca um usuário pelo nome (usado no login/checar duplicidade).
     */
    async findByNome(nome) {
        const db = await getConnection();
        // Acesso direto ao DB
        const [rows] = await db.query(`SELECT * FROM ${this.tableName} WHERE nome = ?`, [nome]);
        return rows.length ? rows[0] : null; 
    }

    /**
     * Salva um novo usuário no banco de dados.
     */
    async save({ nome, email, telefone, senha }) {
        const db = await getConnection();
        
        // Criptografa a senha antes de enviar para o DB
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        
        const sql = "INSERT INTO usuarios (nome, email, telefone, senha) VALUES (?, ?, ?, ?)";
        const [result] = await db.query(sql, [nome, email, telefone, senhaCriptografada]);
        
        return result.insertId;
    }
}

// Exportamos uma instância única (Singleton)
export const userRepository = new UserRepository();
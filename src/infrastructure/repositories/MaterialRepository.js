// /src/infrastructure/repositories/MaterialRepository.js

import { getConnection } from '../database/dbConnection.js';

class MaterialRepository {
    constructor() {this.tableName = "materiais";} 
    // Método para salvar um novo material no banco de dados
    async save({ material, descricao, marca }) {
        const db = await getConnection();
        
        // Gera datas e horas no backend
        const agora = new Date();
        const hrcad = agora.toLocaleTimeString("pt-BR");
        const dtcad = agora.toLocaleDateString("pt-BR");
        
        const sql = `INSERT INTO ${this.tableName} (material, descricao, marca, hrcad, dtcad) VALUES (?, ?, ?, ?, ?) `;
        
        const [result] = await db.execute(sql, [material, descricao, marca, hrcad, dtcad]);
        
        return result.insertId;
    }
    // Método para buscar todos os materiais no banco de dados
    async buscaMaterial() {
        const db = await getConnection();

        const sql = `SELECT * FROM ${this.tableName} ORDER BY material ASC`;
        const [rows] = await db.execute(sql);
        return rows;
    }
}


export const materialRepository = new MaterialRepository();
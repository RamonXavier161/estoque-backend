// /src/infrastructure/database/dbConnection.js

import mysql from 'mysql2/promise';

// Configurações do seu DB (As que estavam nos seus arquivos antigos)
const dbConfig = {
    host: "localhost",
    user: "ramon",
    password: "@12345678",
    database: "appaudazz"
};

let connection;

/**
 * Retorna a conexão com o banco de dados, criando-a se ainda não existir.
 */
export async function getConnection() {
    if (!connection) {
        console.log("Conectando ao banco de dados...");
        connection = await mysql.createConnection(dbConfig);
        console.log("✅ Conexão com DB estabelecida.");
    }
    return connection;
}
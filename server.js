// server.js (Na RAIZ do projeto)
// Certifique-se de que o caminho está correto: ./src/infrastructure/api/app.js
import { app } from './src/apirest/app.js';
import { getConnection } from './src/infrastructure/database/dbConnection.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        // 1. Tenta estabelecer a conexão com o DB
        await getConnection(); 
        
        // 2. Inicia o servidor Express
        app.listen(PORT, () => {
            console.log("✅ API rodando na porta 3000");
            console.log(`Acesse: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ ERRO CRÍTICO: Falha ao iniciar o servidor ou conectar ao DB.", error);
        process.exit(1); // Encerra o processo com erro
    }
}

startServer();
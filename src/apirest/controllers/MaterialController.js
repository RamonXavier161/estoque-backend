// /src/infrastructure/controllers/MaterialController.js

import { ListMaterials } from '../../application/use-cases/ListMaterials.js';
import { RegisterMaterial } from '../../application/use-cases/RegisterMaterial.js';

// Instanciamos o Caso de Uso
const registerMaterial = new RegisterMaterial();
const listMaterials = new ListMaterials();

export class MaterialController {
    
    // Método para POST /cadastrar-material
    static async register(req, res) {
        const { material, descricao, marca } = req.body;
        
        try {
            // Delega para o Use Case
            const result = await registerMaterial.execute({ material, descricao,  marca});
            
            // 200 OK (Pode ser 201 Created também)
            return res.status(200).json(result);
            
        } catch (error) {
            // Trata erros de negócio (ex: usucad ausente, erro de validação)
            if (error.message.includes("obrigatório")) {
                return res.status(400).json({ message: error.message }); // 400 Bad Request
            }
            // Trata erros genéricos
            console.error("Erro no cadastro de material:", error);
            return res.status(500).json({ message: "Erro interno ao cadastrar material" });
        }
    }


    // Método para GET /materiais
    static async list(req,res) {
        try {
            const materials = await listMaterials.execute();

            return res.status(200).json(materials);

        } catch (error) {
            console.error("Erro ao listar materiais:", error);
            return res.status(500).json({ message: "Erro interno ao listar materiais" });
        }
    }

}
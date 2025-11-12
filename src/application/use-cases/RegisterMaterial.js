// /src/application/use-cases/RegisterMaterial.js

// Importa a instância do Repositório que acabamos de criar
import { materialRepository } from '../../infrastructure/repositories/MaterialRepository.js';

export class RegisterMaterial {
    
    /**
     * @param {object} data - Dados do material a ser registrado.
     */
    async execute({ material, descricao, marca }) {
        
        
        const materialId = await materialRepository.save({ 
            material, 
            descricao, 
            marca
        });

        return { 
            message: "Material cadastrado com sucesso!", 
            materialId 
        };
    }
}
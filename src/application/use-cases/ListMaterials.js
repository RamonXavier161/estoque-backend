import { materialRepository } from '../../infrastructure/repositories/MaterialRepository.js';

export class ListMaterials {
    
    /**
     * Executa o caso de uso de listagem de materiais.
     */
    async execute() {
        const materials = await materialRepository.buscaMaterial();
        
        return materials;
    }
}
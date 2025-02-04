export function compareCategorias(originalCategories, updatedCategories) {
    // Converte os arrays para Sets para facilitar a comparação
    const originalSet = new Set(originalCategories);
    const updatedSet = new Set(updatedCategories);

    // Encontra categorias que foram removidas (estão no original, mas não no atualizado)
    const removedCategories = originalCategories.filter(id => !updatedSet.has(id));

    // Encontra categorias que foram adicionadas (estão no atualizado, mas não no original)
    const addedCategories = updatedCategories.filter(id => !originalSet.has(id));

    return {
        removed: removedCategories,
        added: addedCategories
    };
}
// A simple recipe database.
// The key is the recipe name, and the value is a list of required ingredients.
export const recipeData = new Map<string, string[]>([
  ['Macarronada à parmegiana', ['molho de tomate', 'macarrão', 'frango', 'queijo']],
  ['Galinhada', ['frango', 'arroz', 'tomate', 'cebola']],
  ['Frango Assado com Batatas', ['frango', 'batata', 'cebola', 'limão']],
  ['Strogonoff de Frango', ['frango', 'creme de leite', 'ketchup', 'mostarda', 'champignon']],
  ['Ovos Mexidos', ['ovo', 'leite', 'manteiga']],
  ['Salada de Tomate', ['tomate', 'cebola', 'azeite']],
  ['Caipirinha', ['limão', 'cachaça', 'açúcar']],
  ['Gin Tônica', ['gin', 'água tônica', 'limão', 'gelo']],
  ['Vodka com Limão', ['vodka', 'limão', 'gelo']],
  ['Risoto de Cogumelos', ['arroz', 'cogumelo', 'vinho branco', 'queijo parmesão']],
  ['Sopa de Legumes', ['batata', 'cenoura', 'cebola', 'tomate']],
  ['Purê de Batata', ['batata', 'leite', 'manteiga']],
]);

/**
 * Finds matching recipes from the database based on available ingredients.
 * A recipe is considered a match if all of its required ingredients are present
 * in the list of detected ingredients.
 * @param detectedIngredients A list of ingredients detected from the image.
 * @returns A list of recipe names that can be made with the available ingredients.
 */
export function findMatchingRecipes(detectedIngredients: string[]): string[] {
  const matchingRecipes: string[] = [];
  
  // Create a set for quick lookups of detected ingredients.
  // Convert to lowercase for case-insensitive matching.
  const availableIngredients = new Set(detectedIngredients.map(ing => ing.toLowerCase()));

  for (const [recipe, requiredIngredients] of recipeData.entries()) {
    // Check if all required ingredients for the recipe are available.
    const hasAllIngredients = requiredIngredients.every(req => {
        // Simple check for inclusion. For more complex cases, you might want to handle plurals or variations.
        // e.g., 'tomate' vs 'tomates'
        const reqLower = req.toLowerCase();
        return availableIngredients.has(reqLower) || availableIngredients.has(reqLower + 's');
    });

    if (hasAllIngredients) {
      matchingRecipes.push(recipe);
    }
  }

  return matchingRecipes;
}

// src/ai/flows/suggest-recipes.ts
'use server';
/**
 * @fileOverview Um fluxo que sugere receitas com base em uma lista de ingredientes.
 *
 * - suggestRecipes - Uma função que gerencia o processo de sugestão de receitas.
 * - SuggestRecipesInput - O tipo de entrada para a função suggestRecipes.
 * - SuggestRecipesOutput - O tipo de retorno para a função suggestRecipes.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecipeSchema = z.object({
  recipeName: z.string().describe('O nome da receita.'),
  missingIngredients: z.array(z.string()).describe('A lista de ingredientes que faltam para esta receita.'),
});

const SuggestRecipesInputSchema = z.object({
  ingredients: z.array(z.string()).describe('Uma lista de nomes de ingredientes.'),
});
export type SuggestRecipesInput = z.infer<typeof SuggestRecipesInputSchema>;

const SuggestRecipesOutputSchema = z.object({
  recipes: z.array(RecipeSchema).describe('Uma lista de receitas sugeridas.'),
});
export type SuggestRecipesOutput = z.infer<typeof SuggestRecipesOutputSchema>;

export async function suggestRecipes(input: SuggestRecipesInput): Promise<SuggestRecipesOutput> {
  return suggestRecipesFlow(input);
}

const suggestRecipesPrompt = ai.definePrompt({
  name: 'suggestRecipesPrompt',
  input: {schema: SuggestRecipesInputSchema},
  output: {schema: SuggestRecipesOutputSchema},
  prompt: `Você é um assistente de IA que sugere receitas com base em uma lista de ingredientes.

  Baseado nessa lista de ingredientes: {{ingredients}}, retorne uma lista com o nome de três possíveis receitas que posso fazer.
  Para cada receita, liste também os ingredientes que podem estar faltando.
  Responda sempre em português (PT-BR).
  `,
});

const suggestRecipesFlow = ai.defineFlow(
  {
    name: 'suggestRecipesFlow',
    inputSchema: SuggestRecipesInputSchema,
    outputSchema: SuggestRecipesOutputSchema,
  },
  async input => {
    const {output} = await suggestRecipesPrompt(input);
    return output!;
  }
);

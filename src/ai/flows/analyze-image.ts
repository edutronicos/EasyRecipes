// src/ai/flows/analyze-image.ts
'use server';
/**
* @fileOverview Um fluxo que analisa uma imagem de ingredientes e extrai os nomes dos ingredientes.
*
* - analyseIngredientImage - Uma função que gerencia o processo de análise de imagens.
* - AnalyzeIngredientImageInput - O tipo de entrada para a função analyseIngredientImage.
* - AnalyzeIngredientImageOutput - O tipo de retorno para a função analyseIngredientImage.
*/

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeIngredientImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of ingredients, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AnalyzeIngredientImageInput = z.infer<typeof AnalyzeIngredientImageInputSchema>;

const AnalyzeIngredientImageOutputSchema = z.object({
  ingredients: z.array(z.string()).describe('A list of ingredient names extracted from the image.'),
});
export type AnalyzeIngredientImageOutput = z.infer<typeof AnalyzeIngredientImageOutputSchema>;

export async function analyzeIngredientImage(input: AnalyzeIngredientImageInput): Promise<AnalyzeIngredientImageOutput> {
  return analyzeIngredientImageFlow(input);
}

const analyzeIngredientImagePrompt = ai.definePrompt({
  name: 'analyzeIngredientImagePrompt',
  input: {schema: AnalyzeIngredientImageInputSchema},
  output: {schema: AnalyzeIngredientImageOutputSchema},
  prompt: `Você é um assistente de IA que analisa imagens de ingredientes e extrai os nomes dos ingredientes.

  Analise a imagem e extraia os nomes dos ingredientes. Retorne uma lista de nomes de ingredientes. Responda sempre em português (PT-BR).

  Imagem: {{media url=photoDataUri}}
  `,
});

const analyzeIngredientImageFlow = ai.defineFlow(
  {
    name: 'analyzeIngredientImageFlow',
    inputSchema: AnalyzeIngredientImageInputSchema,
    outputSchema: AnalyzeIngredientImageOutputSchema,
  },
  async input => {
    const {output} = await analyzeIngredientImagePrompt(input);
    return output!;
  }
);

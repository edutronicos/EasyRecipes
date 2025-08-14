// src/ai/flows/analyze-image.ts
'use server';
/**
 * @fileOverview A flow that analyzes an image of ingredients and extracts the ingredient names.
 *
 * - analyzeIngredientImage - A function that handles the image analysis process.
 * - AnalyzeIngredientImageInput - The input type for the analyzeIngredientImage function.
 * - AnalyzeIngredientImageOutput - The return type for the analyzeIngredientImage function.
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
  prompt: `You are an AI assistant that analyzes images of ingredients and extracts the names of the ingredients.

  Analyze the image and extract the ingredient names. Return a list of ingredient names.

  Image: {{media url=photoDataUri}}
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

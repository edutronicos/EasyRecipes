"use server";

import { analyzeIngredientImage } from "@/ai/flows/analyze-image";
import { suggestRecipes } from "@/ai/flows/suggest-recipes";

export async function getRecipesForImage(photoDataUri: string) {
  try {
    // 1. Analyze the image to get ingredients
    const analysisResult = await analyzeIngredientImage({ photoDataUri });
    const detectedIngredients = analysisResult.ingredients || [];

    if (detectedIngredients.length === 0) {
      return {
        ingredients: [],
        recipes: [],
      };
    }

    // 2. Suggest recipes based on the detected ingredients
    const suggestionResult = await suggestRecipes({ ingredients: detectedIngredients });
    const suggestedRecipes = suggestionResult.recipes || [];

    return {
      ingredients: detectedIngredients,
      recipes: suggestedRecipes,
    };
  } catch (error) {
    console.error("Error in getRecipesForImage action:", error);
    return {
      ingredients: [],
      recipes: [],
      error: "Failed to process image and suggest recipes. Please try again.",
    };
  }
}

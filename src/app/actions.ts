"use server";

import { analyzeIngredientImage } from "@/ai/flows/analyze-image";
import { findMatchingRecipes } from "@/lib/recipes";

export async function getRecipesForImage(photoDataUri: string) {
  try {
    // 1. Analyze the image to get ingredients
    const analysisResult = await analyzeIngredientImage({ photoDataUri });
    const detectedIngredients = analysisResult.ingredients || [];

    // 2. Find matching recipes based on ingredients
    const matchedRecipes = findMatchingRecipes(detectedIngredients);

    return {
      ingredients: detectedIngredients,
      recipes: matchedRecipes,
    };
  } catch (error) {
    console.error("Error in getRecipesForImage action:", error);
    return {
      ingredients: [],
      recipes: [],
      error: "Failed to analyze image. Please try again.",
    };
  }
}

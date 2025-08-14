"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ChefHat, Loader2, Sparkles, Utensils, X } from "lucide-react";
import { getRecipesForImage } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

type ActionResult = {
  ingredients: string[];
  recipes: string[];
  error?: string;
};

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ActionResult | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!imageFile) {
      toast({
        variant: "destructive",
        title: "No image selected",
        description: "Please upload an image of your ingredients.",
      });
      return;
    }
    setIsLoading(true);
    setResult(null);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = async () => {
        const base64data = reader.result as string;
        const res = await getRecipesForImage(base64data);
        if (res.error) {
          toast({
            variant: "destructive",
            title: "Analysis Failed",
            description: res.error,
          });
        } else {
          setResult(res);
        }
        setIsLoading(false);
      };
    } catch (error) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "An unexpected error occurred",
        description: "Please try again later.",
      });
    }
  };
  
  const handleReset = () => {
    setImageUrl(null);
    setImageFile(null);
    setResult(null);
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-6 md:p-8">
      <header className="w-full max-w-4xl mb-8 text-center">
        <div className="inline-flex items-center gap-3">
          <ChefHat className="w-10 h-10 text-primary" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Chef AI</h1>
        </div>
        <p className="text-muted-foreground mt-2 text-lg">
          Snap a photo of your ingredients and discover what you can cook!
        </p>
      </header>

      <main className="w-full max-w-md">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center font-headline text-2xl">
              Upload Your Ingredients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full h-64 border-2 border-dashed rounded-lg flex items-center justify-center relative bg-muted/30 overflow-hidden">
                {imageUrl ? (
                  <>
                    <Image
                      src={imageUrl}
                      alt="Ingredients preview"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                     <Button variant="destructive" size="icon" className="absolute top-2 right-2 z-10" onClick={handleReset}>
                        <X className="h-4 w-4" />
                     </Button>
                  </>
                ) : (
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Camera className="w-12 h-12 mb-2" />
                    <span className="font-semibold">Click to upload</span>
                    <span className="text-sm">or drag and drop</span>
                  </label>
                )}
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              {imageUrl && !isLoading && (
                <Button onClick={handleAnalyze} className="w-full" size="lg">
                  <Sparkles className="mr-2 h-5 w-5" /> Find Recipes
                </Button>
              )}

              {isLoading && (
                <div className="flex items-center justify-center w-full flex-col space-y-2">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-muted-foreground">Analyzing ingredients...</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {result && !isLoading && (
          <div className="mt-8 space-y-6 animate-in fade-in-50 duration-500">
            {result.ingredients.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline"><Utensils /> Detected Ingredients</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {result.ingredients.map((ingredient) => (
                    <Badge key={ingredient} variant="secondary" className="text-base px-3 py-1">{ingredient}</Badge>
                  ))}
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline"><ChefHat /> Suggested Recipes</CardTitle>
                {result.recipes.length === 0 && (
                    <CardDescription>No matching recipes found. Try with different ingredients!</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                  <div className="space-y-3">
                      {result.recipes.map((recipe) => (
                           <div key={recipe} className="p-4 rounded-md border bg-background hover:bg-muted/50 transition-colors">
                              <p className="font-semibold text-lg text-primary">{recipe}</p>
                           </div>
                      ))}
                  </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}

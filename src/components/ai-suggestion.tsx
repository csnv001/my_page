"use client";

import { useState } from "react";
import { BrainCircuit, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { getAiSuggestions } from "@/lib/actions";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function AiSuggestion() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetSuggestions = async () => {
    setIsLoading(true);
    setError(null);
    setSuggestions([]);
    
    const result = await getAiSuggestions();

    if (result.success && result.suggestions) {
      setSuggestions(result.suggestions);
    } else {
      setError(result.error || "An unknown error occurred.");
    }
    
    setIsLoading(false);
  };

  return (
    <section id="ai-suggestion" className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto text-center">
          <CardHeader>
            <CardTitle className="font-headline text-3xl sm:text-4xl text-primary flex items-center justify-center gap-3">
              <BrainCircuit className="h-8 w-8" />
              AI-Powered Skill Boost
            </CardTitle>
            <CardDescription className="pt-2">
              Based on my current projects and skills, this AI tool suggests technologies I could focus on to enhance my portfolio.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleGetSuggestions} disabled={isLoading} size="lg">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Get AI Suggestions"
              )}
            </Button>
            
            {error && (
              <Alert variant="destructive" className="mt-6 text-left">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {suggestions.length > 0 && (
              <div className="mt-8 text-left">
                <h4 className="font-semibold text-lg mb-4">Recommended areas for improvement:</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {suggestions.map((skill) => (
                    <Badge 
                      key={skill} 
                      className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

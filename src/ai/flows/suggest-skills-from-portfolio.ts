'use server';

/**
 * @fileOverview An AI agent that analyzes a developer's portfolio content and suggests technologies to focus on improving.
 *
 * - suggestSkillsFromPortfolio - A function that takes the portfolio content as input and returns a list of suggested skills to improve.
 * - SuggestSkillsFromPortfolioInput - The input type for the suggestSkillsFromPortfolio function.
 * - SuggestSkillsFromPortfolioOutput - The return type for the suggestSkillsFromPortfolio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSkillsFromPortfolioInputSchema = z.object({
  projects: z
    .array(z.string())
    .describe('A list of project descriptions from the portfolio.'),
  skills: z
    .array(z.string())
    .describe('A list of skills currently listed in the portfolio.'),
});
export type SuggestSkillsFromPortfolioInput = z.infer<
  typeof SuggestSkillsFromPortfolioInputSchema
>;

const SuggestSkillsFromPortfolioOutputSchema = z.object({
  suggestedSkills: z
    .array(z.string())
    .describe(
      'A list of suggested skills to improve, based on the portfolio content.'
    ),
});
export type SuggestSkillsFromPortfolioOutput = z.infer<
  typeof SuggestSkillsFromPortfolioOutputSchema
>;

export async function suggestSkillsFromPortfolio(
  input: SuggestSkillsFromPortfolioInput
): Promise<SuggestSkillsFromPortfolioOutput> {
  return suggestSkillsFromPortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSkillsFromPortfolioPrompt',
  input: {schema: SuggestSkillsFromPortfolioInputSchema},
  output: {schema: SuggestSkillsFromPortfolioOutputSchema},
  prompt: `You are a career advisor for developers. You will analyze a developer's portfolio content (projects and skills) and suggest technologies they should focus on improving to better showcase their capabilities.

  Here's the developer's project list: {{{projects}}}
  Here's the developer's skills list: {{{skills}}}

  Based on their projects and skills, suggest technologies that the developer can improve on, so they can better showcase their capabilities. Focus on skills that can fill gaps in their projects.
  Return a list of skills, separated by commas.
  `,
});

const suggestSkillsFromPortfolioFlow = ai.defineFlow(
  {
    name: 'suggestSkillsFromPortfolioFlow',
    inputSchema: SuggestSkillsFromPortfolioInputSchema,
    outputSchema: SuggestSkillsFromPortfolioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

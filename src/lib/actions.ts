"use server";

import { z } from "zod";
import { suggestSkillsFromPortfolio } from "@/ai/flows/suggest-skills-from-portfolio";
import { projectsData, skillsData } from "./data";

export async function getAiSuggestions() {
  try {
    const input = {
      projects: projectsData.map(p => `${p.title}: ${p.description}`),
      skills: skillsData,
    };
    const result = await suggestSkillsFromPortfolio(input);
    return { success: true, suggestions: result.suggestedSkills };
  } catch (error) {
    console.error("AI suggestion error:", error);
    return { success: false, error: "Failed to get AI suggestions. Please try again later." };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function sendContactMessage(formData: unknown) {
  const validatedFields = contactSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid form data." };
  }
  
  // Simulate sending email
  console.log("New contact message:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: "Your message has been sent successfully!" };
}

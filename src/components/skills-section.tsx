import { Badge } from "./ui/badge";
import { skillsData } from "@/lib/data";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            My Tech Stack
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-foreground/70">
            A collection of technologies and tools I'm proficient in, enabling me to build robust and scalable applications.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {skillsData.map((skill) => (
            <Badge 
              key={skill} 
              variant="outline" 
              className="px-4 py-2 text-sm font-medium bg-card border-primary/20 text-primary transition-all hover:bg-primary/10"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

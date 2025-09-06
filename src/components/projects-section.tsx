import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { projectsData } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-foreground/70">
            Here are some of the projects I'm proud to have worked on. Explore them to see my skills in action.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="relative aspect-video w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    data-ai-hint={project.imageHint}
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-foreground/70">{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-3">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { profileData } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="hero" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
              {profileData.name}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-foreground/80">
              {profileData.title}
            </p>
            <p className="mt-6 max-w-2xl text-base text-foreground/70">
              {profileData.bio}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <div className="flex items-center gap-4">
                <a href={profileData.contact.socials.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href={profileData.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href={profileData.contact.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href={`mailto:${profileData.contact.email}`} className="text-foreground/60 hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-48 w-48 md:h-64 md:w-64 justify-self-center md:justify-self-end">
            <Image
              src={profileData.avatarUrl}
              alt={profileData.name}
              width={256}
              height={256}
              data-ai-hint="professional headshot"
              className="rounded-full object-cover shadow-lg border-4 border-card"
            />
             <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

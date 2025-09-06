import { profileData } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-foreground/60">
        <p className="text-sm">
          &copy; {currentYear} {profileData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Venkata Ganga Govardhan Mowva. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/govardhanmowva/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/GovardhanMowva14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:mowvagangagovardhan14@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

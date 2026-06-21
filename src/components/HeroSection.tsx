import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Premium mesh gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(160_84%_39%/0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,hsl(32_95%_50%/0.14),transparent_55%),radial-gradient(ellipse_at_center,hsl(217_24%_15%/0.6),transparent_70%)]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
        {/* Floating orbs */}
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-24 w-[28rem] h-[28rem] rounded-full bg-[hsl(var(--gold))]/15 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium tracking-wider uppercase text-primary">
              Agentic AI • Generative AI • Machine Learning
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-[1.05] tracking-tight">
            Venkata Ganga
            <span className="block">
              <span className="gradient-text">Govardhan</span> Mowva
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Senior AI Engineer crafting{" "}
            <span className="text-foreground font-medium">agentic systems</span>,{" "}
            <span className="text-foreground font-medium">RAG pipelines</span>, and{" "}
            <span className="text-foreground font-medium">production ML</span> that
            deliver measurable enterprise impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-glow)] px-8"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-[hsl(var(--gold))]/50 text-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/10 hover:text-[hsl(var(--gold))] px-8"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/govardhanmowva/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/GovardhanMowva14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="mailto:mowvagangagovardhan14@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={26} />
          </a>
        </div>
      </div>
    </section>
  );
};

import { Mail, Linkedin, MapPin, Github } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mowvagangagovardhan14@gmail.com",
    href: "mailto:mowvagangagovardhan14@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/govardhanmowva",
    href: "https://www.linkedin.com/in/govardhanmowva/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/GovardhanMowva14",
    href: "https://github.com/GovardhanMowva14",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dallas, TX",
    href: null,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to AI Engineer, Machine Learning Engineer, and Data Scientist roles.
            Let's connect and discuss how I can contribute to your team.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="font-medium hover:text-primary transition-colors duration-200 block truncate"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium truncate">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

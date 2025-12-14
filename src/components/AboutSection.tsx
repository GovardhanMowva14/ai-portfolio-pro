import { Brain, Database, LineChart, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep expertise in ML algorithms, neural networks, and model optimization.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Building robust data pipelines and scalable analytics infrastructure.",
  },
  {
    icon: LineChart,
    title: "Analytics",
    description: "Transforming raw data into actionable business intelligence.",
  },
  {
    icon: Sparkles,
    title: "AI Innovation",
    description: "Developing cutting-edge AI solutions for real-world problems.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate AI Engineer and Data Scientist with expertise in building 
            end-to-end machine learning solutions. With a strong foundation in statistics, 
            programming, and domain knowledge, I specialize in transforming complex data 
            challenges into scalable, production-ready AI systems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            My journey spans from developing predictive models and recommendation systems 
            to deploying NLP solutions and computer vision applications. I thrive on 
            solving complex problems and continuously learning new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

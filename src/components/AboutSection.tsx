import { Brain, Database, LineChart, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep expertise in ML algorithms, neural networks, XGBoost, and model optimization.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Building robust ETL pipelines, feature engineering, and scalable data infrastructure.",
  },
  {
    icon: LineChart,
    title: "Analytics & BI",
    description: "Power BI, Tableau, and data-driven insights for executive decision-making.",
  },
  {
    icon: Sparkles,
    title: "NLP & RAG",
    description: "Building intelligent chatbots, semantic search, and LLM-powered applications.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/10">
              <img
                src={profilePhoto}
                alt="Venkata Ganga Govardhan Mowva"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto lg:mx-0 mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI Engineer and Data Scientist with a Master's in Business Analytics & Artificial Intelligence 
              from UT Dallas. I specialize in building end-to-end machine learning systems, NLP solutions, 
              and RAG-powered applications that deliver measurable business value.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              My experience spans enterprise GRC AI platforms, conversational AI chatbots, predictive modeling, 
              and analytics dashboards. I thrive on transforming complex data challenges into production-ready 
              AI solutions that drive real impact.
            </p>
          </div>
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

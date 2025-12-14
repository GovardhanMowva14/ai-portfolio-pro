import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real-Time Fraud Detection System",
    description:
      "Built an end-to-end fraud detection pipeline processing 100K+ transactions/second with 99.7% accuracy using ensemble ML models.",
    tags: ["Python", "Spark", "XGBoost", "Kafka", "AWS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "NLP Document Intelligence",
    description:
      "Developed a document understanding platform using transformer models for entity extraction, classification, and summarization.",
    tags: ["PyTorch", "BERT", "FastAPI", "Docker", "GCP"],
    github: "https://github.com",
  },
  {
    title: "Recommendation Engine",
    description:
      "Designed and deployed a hybrid recommendation system combining collaborative filtering and content-based approaches for e-commerce.",
    tags: ["TensorFlow", "Redis", "PostgreSQL", "Kubernetes"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Time Series Forecasting Platform",
    description:
      "Created an automated forecasting solution for supply chain optimization, reducing inventory costs by 20%.",
    tags: ["Prophet", "LSTM", "Airflow", "Snowflake", "Tableau"],
    github: "https://github.com",
  },
  {
    title: "Computer Vision Quality Control",
    description:
      "Implemented an automated visual inspection system for manufacturing using CNNs, detecting defects with 98% precision.",
    tags: ["PyTorch", "OpenCV", "Edge Deployment", "Azure"],
    github: "https://github.com",
  },
  {
    title: "LLM-Powered Analytics Assistant",
    description:
      "Built a conversational AI assistant that enables natural language queries on enterprise data using RAG architecture.",
    tags: ["LangChain", "OpenAI", "Pinecone", "React", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in machine learning, 
            data engineering, and AI system development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

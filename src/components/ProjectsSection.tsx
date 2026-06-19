import { Star, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PROFILE_GITHUB = "https://github.com/GovardhanMowva14";

const projects = [
  {
    title: "UTD JSOM Conversational AI Chatbot",
    featured: true,
    bullets: [
      "Built an enterprise conversational AI chatbot for UT Dallas JSOM",
      "Implemented web scraping, MongoDB storage, and data preprocessing",
      "Built semantic search using Sentence-BERT and FAISS",
      "Integrated Rasa for NLU and backend actions",
      "Evaluated multiple LLMs (Mistral, OpenAI, FLAN-T5, IBM Watson)",
      "Deployed Chainlit frontend with feedback collection",
    ],
    tags: ["Python", "NLP", "RAG", "SBERT", "FAISS", "Rasa", "MongoDB", "Chainlit"],
    github: "https://github.com/Nagajyothi231/Conversational-AI-Chatbot",
  },
  {
    title: "Medicare Billing Analytics Dashboard",
    featured: false,
    bullets: [
      "Designed interactive Power BI dashboard to analyze Medicare billing data",
      "Built KPIs for Total Billing, Insurance Coverage, and Out-of-Pocket Costs",
      "Created DAX measures to evaluate billing performance by service type",
      "Used geospatial visuals to analyze regional billing distribution",
    ],
    tags: ["Power BI", "DAX", "Excel", "Data Modeling"],
    github: PROFILE_GITHUB,
  },
  {
    title: "Emotion Detection using Multi-Label Classification",
    featured: false,
    bullets: [
      "Developed models using RoBERTa, LSTM, DistilBERT, and LLaMA",
      "Implemented multi-label classification achieving top Kaggle ranking",
      "Fine-tuned transformer models for contextual emotion extraction",
      "Optimized with Weights & Biases tracking and hyperparameter tuning",
    ],
    tags: ["Python", "NLP", "RoBERTa", "LSTM", "LLaMA", "W&B"],
    github: PROFILE_GITHUB,
  },
  {
    title: "Credit Risk Prediction (American Express)",
    featured: false,
    bullets: [
      "Implemented XGBoost and Neural Networks achieving AUC of 0.92",
      "Applied feature engineering and SHAP explainability",
      "Delivered production-ready ML pipeline for credit risk scoring",
      "Performed hyperparameter optimization and model comparison",
    ],
    tags: ["XGBoost", "Neural Networks", "SHAP", "Python"],
    github: PROFILE_GITHUB,
  },
  {
    title: "Spam Detection using Machine Learning",
    featured: false,
    bullets: [
      "Built ML pipeline using NLP and custom feature engineering",
      "Engineered features including message length and spelling errors",
      "Implemented TF-IDF with Logistic Regression",
      "Evaluated using F1-score and learning curves",
    ],
    tags: ["Python", "Scikit-learn", "TF-IDF", "NLP"],
    github: PROFILE_GITHUB,
  },
  {
    title: "Real-Time Hand Gesture Recognition",
    featured: false,
    bullets: [
      "Developed real-time gesture recognition using webcam input",
      "Used OpenCV and MediaPipe for hand landmark detection",
    ],
    tags: ["Python", "OpenCV", "MediaPipe"],
    github: PROFILE_GITHUB,
  },
  {
    title: "HR Analytics – Employee Turnover",
    featured: false,
    bullets: [
      "Achieved 98% data cleanliness on HR datasets",
      "Developed complex SQL queries using IBM HR data",
      "Built visualizations extracting turnover insights",
      "Achieved 95% correlation with real-world HR trends",
    ],
    tags: ["SQL", "Data Analysis", "Visualization"],
    github: PROFILE_GITHUB,
  },
  {
    title: "Secure Fingerprint-Based Voting Machine",
    featured: false,
    bullets: [
      "Engineered biometric fingerprint authentication",
      "Integrated OTP verification using GSM modules",
      "Implemented alcohol sensors for voter monitoring",
      "Enhanced system security and voting integrity",
    ],
    tags: ["Embedded Systems", "Biometrics", "Security"],
    github: null,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing expertise in machine learning,
            NLP, and AI system development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const hasLink = project.github !== null;
            const Wrapper: any = hasLink ? "a" : "div";
            const wrapperProps = hasLink
              ? { href: project.github!, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={index}
                {...wrapperProps}
                className={`group relative p-6 bg-card border rounded-xl flex flex-col transition-all duration-300 backdrop-blur-sm ${
                  hasLink
                    ? "cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/10"
                    : ""
                } ${
                  project.featured
                    ? "border-accent/40 md:col-span-2 hover:border-accent"
                    : "border-border hover:border-accent/60"
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    {project.featured && (
                      <Badge variant="default" className="flex items-center gap-1 bg-accent text-accent-foreground">
                        <Star className="w-3 h-3" />
                        Featured
                      </Badge>
                    )}
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  {hasLink && (
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                  )}
                </div>
                <ul className="text-muted-foreground text-sm mb-4 flex-grow space-y-2">
                  {project.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-muted text-foreground/85 text-xs font-medium rounded-md border border-border/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {hasLink && (
                  <p className="mt-4 text-xs text-muted-foreground italic group-hover:text-accent transition-colors">
                    View on GitHub →
                  </p>
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

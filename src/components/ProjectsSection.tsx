import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "UTD JSOM Conversational AI Chatbot",
    featured: true,
    bullets: [
      "Designed and developed an enterprise-grade conversational AI chatbot for the UT Dallas Jindal School of Management (JSOM)",
      "Implemented end-to-end pipeline including web scraping (Selenium, BeautifulSoup), data cleaning, and structured storage in MongoDB",
      "Built semantic search using Sentence-BERT embeddings and FAISS for efficient retrieval",
      "Integrated Rasa for NLU and backend action handling, including intent recognition and entity extraction",
      "Evaluated and experimented with multiple LLMs including Mistral, OpenAI, FLAN-T5, and IBM Watson to balance accuracy and performance",
      "Deployed an interactive Chainlit frontend and implemented user feedback collection to continuously improve response quality",
    ],
    tags: ["Python", "NLP", "RAG", "Sentence-BERT", "FAISS", "Rasa", "MongoDB", "Chainlit", "Selenium"],
  },
  {
    title: "Medicare Billing Analytics Dashboard",
    featured: false,
    bullets: [
      "Designed and developed an interactive Power BI dashboard to analyze Medicare billing data for a simulated healthcare facility",
      "Built KPIs for Total Billing Amount, Insurance Coverage, Out-of-Pocket Costs, Room Charges, and Average Length of Stay",
      "Created multiple DAX measures to evaluate billing performance per patient, procedure, and service type",
      "Segmented costs by diagnosis, procedures, and departments",
      "Used geospatial visuals to analyze city/state billing distribution",
      "Ensured healthcare privacy by anonymizing sensitive patient data",
    ],
    tags: ["Power BI", "DAX", "Excel", "Data Modeling"],
  },
  {
    title: "Emotion Detection using Multi-Label Classification",
    featured: false,
    bullets: [
      "Developed multi-label NLP models to classify tweets into emotions such as anger, joy, sadness, and optimism",
      "Implemented LSTM and feed-forward neural networks using Hugging Face Trainer",
      "Fine-tuned transformer models including RoBERTa, DistilBERT, and DistilRoBERTa",
      "Explored instruction-tuned and zero-shot models including Qwen and LLaMA",
      "Optimized experiments using Weights & Biases for tracking and reproducibility",
      "Achieved top-ranking performance in an in-class Kaggle competition",
    ],
    tags: ["Python", "NLP", "LSTM", "RoBERTa", "DistilBERT", "LLaMA"],
  },
  {
    title: "Credit Risk Prediction (American Express Dataset)",
    featured: false,
    bullets: [
      "Built XGBoost and Neural Network models to predict credit default risk",
      "Performed data preprocessing, feature engineering, and hyperparameter tuning",
      "Conducted bias–variance analysis and model comparison",
      "Applied SHAP for model explainability",
      "Achieved an AUC of 0.92 on validation data",
    ],
    tags: ["XGBoost", "Neural Networks", "SHAP", "Applied Machine Learning"],
  },
  {
    title: "Spam Detection using Machine Learning",
    featured: false,
    bullets: [
      "Built a machine learning pipeline to detect spam messages using NLP and feature engineering",
      "Performed text preprocessing and duplicate removal",
      "Engineered custom features including message length, special characters, capital letters, and spelling errors",
      "Implemented TF-IDF and combined feature pipelines with Logistic Regression",
      "Evaluated models using F1-score and learning curves",
    ],
    tags: ["Python", "Scikit-learn", "TF-IDF", "NLP", "Pandas"],
  },
  {
    title: "Real-Time Hand Gesture Recognition System",
    featured: false,
    bullets: [
      "Developed a real-time hand gesture recognition system using webcam video input",
      "Used OpenCV and MediaPipe to detect hand landmarks and recognize gestures",
    ],
    tags: ["Python", "OpenCV", "MediaPipe"],
  },
  {
    title: "HR Analytics – Employee Turnover Analysis",
    featured: false,
    bullets: [
      "Achieved 98% data cleanliness and standardized HR datasets",
      "Developed complex SQL queries using IBM HR data",
      "Built visualizations to extract insights on employee turnover",
      "Achieved a 95% correlation with real-world HR trends",
    ],
    tags: ["SQL", "Data Analysis"],
  },
  {
    title: "Secure Fingerprint-Based Electronic Voting Machine",
    featured: false,
    bullets: [
      "Engineered biometric fingerprint authentication for secure voter identification",
      "Integrated OTP verification using GSM modules",
      "Implemented alcohol sensors for real-time voter sobriety monitoring",
      "Enhanced system security and voting integrity",
    ],
    tags: ["Embedded Systems", "Biometrics", "Security"],
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group p-6 bg-card border transition-all duration-300 flex flex-col ${
                project.featured 
                  ? "border-primary/50 md:col-span-2 bg-primary/5" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                {project.featured && (
                  <Badge variant="default" className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </Badge>
                )}
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <ul className="text-muted-foreground text-sm mb-4 flex-grow space-y-2 list-disc list-inside">
                {project.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

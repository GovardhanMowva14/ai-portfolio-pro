import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI Engineer",
    company: "WorldLink US",
    location: "Frisco, TX",
    period: "Sep 2025 – Present",
    description: [
      "Built GRC AI platform (CodifAI) using RAG + FAISS, improving PRC mapping accuracy by 30% across FFIEC & NIST frameworks",
      "Engineered an automated policy-scanner pipeline processing 5,000+ documents, reducing manual review time by 20%",
      "Developed an LLM-powered policy chat assistant using BM25 + embeddings, increasing query precision by 25%",
      "Collaborated cross-functionally to deploy scalable, production-grade AI services",
    ],
  },
  {
    title: "AI Engineer",
    company: "ImpacterAI",
    location: "United States",
    period: "Sep 2025 – Sep 2025",
    description: [
      "Built large-scale Python scrapers capturing 10,000+ property listing records with 98% accuracy",
      "Consolidated multi-source datasets, reducing redundancy by 25% and improving data completeness by 30%",
      "Standardized schemas and automated data merging pipelines to improve data quality",
    ],
  },
  {
    title: "Marketing Data Analyst",
    company: "Compass Group USA",
    location: "Dallas, TX",
    period: "May 2024 – May 2025",
    description: [
      "Analyzed customer transaction data to identify sales trends, driving a 15% increase in top-selling items",
      "Built interactive Power BI dashboards, improving KPI visibility and reporting efficiency by 30%",
      "Automated weekly executive reports using SQL and Excel, reducing manual effort by 25%",
      "Improved sales forecasting accuracy by 20% through data-driven insights",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Tata Elxsi",
    location: "Bangalore, India",
    period: "Jan 2023 – Jun 2023",
    description: [
      "Developed ML models improving predictive accuracy by 30%, exceeding client benchmarks",
      "Implemented preprocessing and feature engineering pipelines, improving training efficiency by 25%",
      "Integrated ML solutions into client systems, reducing processing time by 15%",
      "Contributed across the full ML lifecycle, ensuring 99% production uptime",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering impactful AI and data solutions across 
            enterprise and startup environments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

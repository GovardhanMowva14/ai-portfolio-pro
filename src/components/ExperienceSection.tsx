import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior AI Engineer",
    company: "Tech Innovation Inc.",
    period: "2022 - Present",
    description: [
      "Lead development of production ML systems serving 10M+ users",
      "Architected and deployed real-time recommendation engine improving engagement by 35%",
      "Mentored junior data scientists and established ML best practices",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Data Solutions Corp.",
    period: "2020 - 2022",
    description: [
      "Built end-to-end NLP pipelines for document classification and entity extraction",
      "Reduced model inference latency by 60% through optimization techniques",
      "Implemented MLOps workflows using MLflow and Kubernetes",
    ],
  },
  {
    title: "Data Scientist",
    company: "Analytics Startup",
    period: "2018 - 2020",
    description: [
      "Developed predictive models for customer churn reducing attrition by 25%",
      "Created automated reporting dashboards saving 20+ hours weekly",
      "Collaborated with product teams to define data-driven feature roadmaps",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering impactful AI and data solutions across 
            various industries and scales.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                } md:w-1/2 pl-8 md:pl-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-0 w-3 h-3 bg-primary -translate-x-1 md:translate-x-1/2 md:-right-1.5" />

                <div className={`bg-background p-6 border border-border hover:border-primary/50 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Briefcase className="w-4 h-4 text-primary" />
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                  </div>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

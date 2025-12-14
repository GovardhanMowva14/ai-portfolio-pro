const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "SQL", "JavaScript", "TypeScript", "Scala"],
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "Keras"],
  },
  {
    title: "Data Engineering",
    skills: ["Apache Spark", "Airflow", "dbt", "Kafka", "Snowflake", "BigQuery"],
  },
  {
    title: "Cloud & MLOps",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "MLflow"],
  },
  {
    title: "Analytics & BI",
    skills: ["Tableau", "Power BI", "Looker", "Jupyter", "Pandas", "NumPy"],
  },
  {
    title: "AI & NLP",
    skills: ["OpenAI", "LangChain", "Hugging Face", "BERT", "GPT", "LLMs"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning the entire data science and ML lifecycle, 
            from data ingestion to model deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {skill}
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

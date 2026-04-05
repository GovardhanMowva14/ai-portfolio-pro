import { Award } from "lucide-react";

const certifications = [
  {
    name: "Google Cloud Associate Data Practitioner",
    issuer: "Google Cloud",
  },
  {
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
  },
  {
    name: "Applied Machine Learning",
    issuer: "Graduate Certificate",
  },
  {
    name: "Salesforce AI Associate",
    issuer: "Salesforce",
  },
  {
    name: "Databricks Gen AI Engineer",
    issuer: "Databricks",
  },
  {
    name: "SnowPro Core",
    issuer: "Snowflake",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials validating expertise in cloud, AI, and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-border hover:border-primary/50 transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
              <p className="text-muted-foreground text-sm">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

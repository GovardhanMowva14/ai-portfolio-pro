import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "M.S. in Business Analytics and Artificial Intelligence",
    school: "The University of Texas at Dallas",
    period: "Aug 2023 – May 2025",
    gpa: "3.76",
    coursework: ["Product Strategy", "Data Visualization", "Predictive Modeling", "Business Intelligence", "Machine Learning"],
  },
  {
    degree: "B.Tech in Electronics and Communication Engineering",
    school: "Presidency University, Bangalore",
    period: "Aug 2019 – Jun 2023",
    gpa: "3.80",
    coursework: null,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  </div>
                  <p className="text-primary font-medium mb-2">{edu.school}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <span className="font-medium">GPA: {edu.gpa}</span>
                  </div>
                  {edu.coursework && (
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

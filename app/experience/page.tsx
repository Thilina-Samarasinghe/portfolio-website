"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  // Currently empty array (commented out items)
  /*{
    id: 1,
    role: "Senior Software Engineer",
    company: "TechCorp Inc.",
    period: "Jan 2021 - Present",
    description:
      "Leading the development of a cloud-based SaaS platform serving over 50,000 users. Architected and implemented microservices using Node.js, TypeScript, and AWS. Improved system performance by 40% through optimization and caching strategies.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
  },*/
]

export default function ExperiencePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          My professional journey in software development, showcasing roles and projects that have shaped my expertise.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          {experiences.length > 0 && (
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform -translate-x-1/2 hidden md:block" />
          )}

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.length > 0 ? (
              experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 hidden md:block" />

                  {/* Date - visible only on mobile */}
                  <div className="md:hidden mb-4">
                    <Badge variant="outline" className="text-sm">
                      {exp.period}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-bold">{exp.role}</h2>
                        <h3 className="text-lg text-primary mb-2">{exp.company}</h3>

                        {/* Date - visible only on desktop */}
                        <div className="hidden md:block mb-4">
                          <Badge variant="outline" className="text-sm">
                            {exp.period}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty div for layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Experience details coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


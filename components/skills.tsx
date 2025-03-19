"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 85 },
      { name: "Testing", level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skillCategories.map((category) => (
        <Card key={category.name} className="overflow-hidden">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-6">{category.name}</h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


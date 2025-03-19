"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with payment processing, inventory management, and analytics dashboard.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com/project1",
    githubUrl: "https://github.com/Thilina-Samarasinghe",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that creates marketing copy, blog posts, and social media content.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB", "Express"],
    liveUrl: "https://example.com/project2",
    githubUrl: "https://github.com/Thilina-Samarasinghe",
  },
  {
    id: 3,
    title: "Real-time Collaboration Tool",
    description: "A collaborative workspace with real-time document editing, video conferencing, and task management.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "WebRTC", "Socket.io", "Redis", "AWS"],
    liveUrl: "https://example.com/project3",
    githubUrl: "https://github.com/Thilina-Samarasinghe",
  },
]

export default function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Card className="h-full flex flex-col overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className={`object-cover transition-transform duration-500 ${
                  hoveredId === project.id ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            <CardContent className="flex-grow pt-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}


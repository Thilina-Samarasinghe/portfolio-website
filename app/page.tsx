"use client"

import Link from "next/link"
import CodeRain from "@/components/code-rain"
import TechStack from "@/components/tech-stack"
import DevelopmentAreas from "@/components/development-areas"
import ChatbotIcon from "@/components/chatbot-icon"
import ScrollToTop from "@/components/scroll-to-top"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-black dark:bg-black text-white">
        <div className="absolute inset-0 z-0">
          <CodeRain />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm <span className="text-primary">Thilina Samarasinghe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-6">
              Software Engineer & Full-Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-2xl text-gray-300">
              I build high-performance, scalable applications with modern technologies. Specializing in React, Next.js,
              and cloud architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black hover:bg-gray-200 h-11 px-8 py-2"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white/10 h-11 px-8 py-2"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Development Areas Section */}
      <DevelopmentAreas />

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif italic mb-4 text-yellow-500">
              "You have to win the day, before winning life"
            </p>
            <footer className="text-muted-foreground">
              <motion.cite
                className="not-italic font-medium"
                animate={{
                  color: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#3B82F6"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Stay curious and keep learning!
              </motion.cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Scroll to top button */}
      <ScrollToTop />

      {/* Chatbot Icon - Only visible on home page */}
      <ChatbotIcon link="https://thilina-samarasinghe.github.io/ai-assistant/" />
    </div>
  )
}


"use client"

import { motion } from "framer-motion"
import { Code, Palette, Smartphone, Layout, Globe, Terminal } from "lucide-react"

const developmentAreas = [
  {
    icon: Palette,
    title: "Web Designing",
    description:
      "Creating visually appealing and user-friendly website layouts using tools like Figma, Photoshop, and HTML/CSS.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building functional websites and web applications using front-end (HTML, CSS, JavaScript) and back-end (Node.js, Python, PHP) technologies.",
  },
  {
    icon: Layout,
    title: "UI/UX Designing",
    description:
      "Enhancing user experience by designing intuitive interfaces, improving usability, and creating wireframes/prototypes.",
  },
  {
    icon: Terminal,
    title: "Programming",
    description:
      "Writing and structuring code using various programming languages (Python, Java, C++) to develop software, automate tasks, and solve problems.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Developing mobile or desktop applications for Android, iOS, and other platforms using technologies like Flutter, React Native, and Swift.",
  },
  {
    icon: Globe,
    title: "Web Application",
    description:
      "Creating cloud-based platforms or interactive applications that run in web browsers, such as e-commerce sites or SaaS products.",
  },
]

export default function DevelopmentAreas() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="w-full py-20 bg-[#1a1f36]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">My Development</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developmentAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="p-6 rounded-xl bg-[#1f2544]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 text-primary">
                  <area.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-300">{area.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}


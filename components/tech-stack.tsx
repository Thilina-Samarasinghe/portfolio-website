"use client"

import { motion } from "framer-motion"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiVite,
  SiSpringboot,
  SiDotnet,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiFirebase,
  SiSqlite,
  SiDocker,
  SiFigma,
  SiSwift,
  SiPython,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

const technologies = {
  frontend: [
    { icon: SiHtml5, name: "HTML", color: "text-[#E34F26]" },
    { icon: SiCss3, name: "CSS", color: "text-[#1572B6]" },
    { icon: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]" },
    { icon: SiTypescript, name: "TypeScript", color: "text-[#3178C6]" },
    { icon: SiReact, name: "React", color: "text-[#61DAFB]" },
    /*{ icon: SiJquery, name: "jQuery", color: "text-[#0769AD]" },*/
    { icon: SiBootstrap, name: "Bootstrap", color: "text-[#7952B3]" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#06B6D4]" },
    { icon: SiVite, name: "Vite.js", color: "text-[#646CFF]" },
  ],
  backend: [
    /*{ icon: SiSpringboot, name: "Spring Boot", color: "text-[#6DB33F]" },*/
    { icon: SiDotnet, name: ".NET", color: "text-[#512BD4]" },
    /*{ icon: SiFlask, name: "Flask", color: "text-[#000000]" },*/
    { icon: SiNodedotjs, name: "Node.js", color: "text-[#339933]" },
    { icon: SiExpress, name: "Express.js", color: "text-[#000000]" },
    { icon: SiPython, name: "Python", color: "text-[#3776AB]" },
    { icon: FaJava, name: "Java", color: "text-[#007396]" },
  ],
  database: [
    { icon: SiMongodb, name: "MongoDB", color: "text-[#47A248]" },
    { icon: SiMysql, name: "MySQL", color: "text-[#4479A1]" },
    /*{ icon: SiSupabase, name: "Supabase", color: "text-[#3FCF8E]" },*/
    /*{ icon: SiFirebase, name: "Firebase", color: "text-[#FFCA28]" },*/
    { icon: SiSqlite, name: "SQLite", color: "text-[#003B57]" },
  ],
  others: [
    /*{ icon: SiDocker, name: "Docker", color: "text-[#2496ED]" },*/
    { icon: SiFigma, name: "Figma", color: "text-[#F24E1E]" },
    /*{ icon: SiSwift, name: "Swift", color: "text-[#F05138]" },*/
    { icon: SiAdobeillustrator, name: "Illustrator", color: "text-[#FF9A00]" },
    { icon: SiAdobephotoshop, name: "Photoshop", color: "text-[#31A8FF]" },
  ],
}

export default function TechStack() {
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
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technology Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend */}
          <motion.div
            className="p-6 rounded-xl bg-[#1f2544]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Frontend</h3>
            <div className="grid grid-cols-3 gap-6">
              {technologies.frontend.map((tech) => (
                <motion.div key={tech.name} className="flex flex-col items-center gap-2" variants={itemVariants}>
                  <tech.icon className={`text-4xl ${tech.color}`} />
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="p-6 rounded-xl bg-[#1f2544]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Backend</h3>
            <div className="grid grid-cols-3 gap-6">
              {technologies.backend.map((tech) => (
                <motion.div key={tech.name} className="flex flex-col items-center gap-2" variants={itemVariants}>
                  <tech.icon className={`text-4xl ${tech.color}`} />
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Database */}
          <motion.div
            className="p-6 rounded-xl bg-[#1f2544]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Database</h3>
            <div className="grid grid-cols-3 gap-6">
              {technologies.database.map((tech) => (
                <motion.div key={tech.name} className="flex flex-col items-center gap-2" variants={itemVariants}>
                  <tech.icon className={`text-4xl ${tech.color}`} />
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Others */}
          <motion.div
            className="p-6 rounded-xl bg-[#1f2544]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Others</h3>
            <div className="grid grid-cols-3 gap-6">
              {technologies.others.map((tech) => (
                <motion.div key={tech.name} className="flex flex-col items-center gap-2" variants={itemVariants}>
                  <tech.icon className={`text-4xl ${tech.color}`} />
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}


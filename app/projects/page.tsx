"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const projects = [
  {
    id: 1,
    title: "E-Vcloud Platform",
    description: "Video upload and publishing web-based Application UI.",
    longDescription:
      "I designed the UI for a video upload and publishing web-based application using Figma for wireframing and design. The interface focuses on user-friendly navigation, allowing seamless video uploads, management, and publishing. The design includes essential features such as a dashboard, upload panel, video library, and publishing controls, ensuring a smooth user experience. This project helped me refine my UI/UX design skills and improve my proficiency in Figma.",
    image:
      "https://img.playbook.com/nT_cJAsOyZIcbUMob2_Zaf0blO2k_J_3eSsADoTc3QA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQ0ZmNjNTBl/LTcwMDktNDFiZC1i/NGUwLTE5NTk5N2Ix/OTk5Mg",
    tags: ["Figma"],
    category: "Web App",
    liveUrl: "https://thilinaksamarasinghe.blogspot.com/2025/02/e-vclouda-sleek-and-intuitive-video.html",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "AI Assistant",
    description:
      "An AI-powered chatbot interface built using HTML, CSS, and JavaScript, leveraging the DeepSeek Free API to provide intelligent responses. This AI assistant enhances user interaction through natural language processing, offering real-time assistance for various queries.",
    longDescription:
      "This AI Assistant is a web-based chatbot developed using HTML, CSS, and JavaScript, integrated with the DeepSeek Free API to enable intelligent conversations. The interface is designed to be user-friendly, responsive, and interactive, providing real-time responses to user queries. By utilizing DeepSeeks natural language processing capabilities, the assistant can understand and generate human-like responses, making it useful for customer support, general inquiries, or personal assistance. The project demonstrates seamless API integration, frontend development skills, and AI-powered interaction, offering an engaging user experience.",
    image: "https://img.playbook.com/RuvT5KoE0MM8mLuuhZEZFY2Sm1Y4Zl8kiXq-Ox6fbHw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzZjMDI5ZTgz/LWFkODEtNDQwNS1h/MGVkLTM5OTNkMWM5/N2IwZQ",
    tags: ["Html", "Css", "Deepseek API"],
    category: "AI",
    liveUrl: "#",
    githubUrl: "https://github.com/Thilina-Samarasinghe/ai-assistant",
    featured: true,
  },
  {
    id: 3,
    title: "Photography webisite",
    description: "A photography website featuring Home, Customer Review, Contact, About, and Gallery pages, built using HTML, CSS, JavaScript, and PHP. It showcases photography work, collects customer reviews, and provides contact details for inquiries.",
    longDescription:
      "This is a photography website that I developed using HTML, CSS, JavaScript, and PHP. The website features multiple sections, including a Home page to showcase the brand, a Customer Review section for testimonials, a Contact page for inquiries, an About page providing background information, and a Gallery displaying a collection of photographs. With a visually appealing design and smooth functionality, the site offers an engaging user experience. This project helped me enhance my front-end and back-end web development skills.",
    image: "https://img.playbook.com/hbmEMxWx8maWPyY2WAttDxA9vFLnyEUsW4I1yJLzIDY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2I0MDhmNTUx/LTZhMTItNDNmNy04/NjhlLTkyYzJiMzdk/MzRjYQ",
    tags: ["HTML", "Css", "Java Scrpt", "PHP"],
    category: "Web App",
    liveUrl: "https://thilinaksamarasinghe.blogspot.com/2025/02/photography-website.html",
    githubUrl: "https://github.com/Thilina-Samarasinghe/photography-website",
    featured: true,
  },
  {
    id: 4,
    title: "illustrator desighn",
    description:
      "Passionate illustrator and designer with a creative approach to visual storytelling.",
    longDescription:
      "A passionate illustrator and designer who brings ideas to life through compelling visuals. Skilled in creating detailed illustrations and innovative designs that enhance user experiences. Dedicated to blending creativity with functionality to craft engaging and visually appealing designs.",
    image: "https://img.playbook.com/XdQ1pWgkxpOUbOG_7VVDMbOjaf2qAs8AWxy4tzo-MX0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBjYzE2N2E4/LTEwM2ItNGNiNi1i/OTUwLWZhNGNlNWYw/MzFmMw",
    tags: ["Adobe Illustrator"],
    category: "Design",
    liveUrl: "https://thilinaksamarasinghe.blogspot.com/2025/02/adobe-illustrator-art.html",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Salary Calculation and Management System",
    description: "Developed a salary calculation and management system using C#, applying OOP concepts. The system handles payroll processing, including earnings, deductions, and net salary calculations, with features for record management and financial reporting.",
    longDescription:
      "As part of the 'Object-Oriented Programming with C#' module in the first year, I developed a salary calculation and management system to streamline payroll processing. The system efficiently computes earnings, deductions, and net salaries while offering functionalities to save, update, delete, and clear salary records. Additionally, it generates detailed financial reports and features an intuitive dashboard for easy navigation. This project enhanced my understanding of OOP principles and strengthened my C# programming skills.",
    image: "https://img.playbook.com/ktVj8sTcSOWwV9lv6AIV8Ad-xBBErf4c0N5cJBkU4_Q/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2FjMjcwZjQ4/LWIxMzktNDliMi1h/NGQ2LWU1NTk0OWI0/MWU4Mg",
    tags: ["C#", "OOP Concepts","Ms sql"],
    category: "PC App",
    liveUrl: "https://thilinaksamarasinghe.blogspot.com/2025/02/salary-calculation-and-management.html",
    githubUrl: "https://github.com/Thilina-Samarasinghe/Gifindo-Toys-system-salary-calculation-",
    featured: false,
  },
  {
    id: 6,
    title: "Traveling and booking mobile application Ui",
    description:
      "Designed the UI for a travel and booking mobile app, ensuring a seamless user experience. Features include destination search, accommodation booking, and travel plan management. Focused on intuitive navigation and visually appealing design to enhance usability.",
    longDescription:
      "I designed the UI for a traveling and booking mobile app, focusing on a seamless user experience. The interface includes features for searching destinations, booking accommodations, and managing travel plans. With an intuitive layout and visually appealing design, the app ensures easy navigation for users. This project enhanced my UI/UX design skills and helped me create a user-friendly travel booking experience.",
    image: "https://img.playbook.com/MX5uJImoqsy11FwDntmeV8FRO9xnGD6tFVh2th-hQoU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk2NDYzMmI3/LWUzOWEtNGQ0OC05/YjE0LWE1ODA4MTJj/NTc1Yg",
    tags: ["Figma"],
    category: "Mobile",
    liveUrl: "https://www.figma.com/design/xx1mXoP26OeAam4BZf1TpF/Untitled?node-id=0-1&m=dev&t=Ospk3HLbJQ1og1Vg-1",
    githubUrl: "#",
    featured: false,
  },
]

const categories = ["All", "Web App", "Mobile", "AI", "3D"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Explore my portfolio of projects spanning web applications, mobile apps, AI solutions, and 3D experiences.
        </p>

        {/* Project Filters */}
        <Tabs defaultValue="All" className="mb-12">
          <TabsList>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="flex-grow pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Badge>{project.category}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="link"
                    className="p-0 h-auto font-semibold"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    View Details
                  </Button>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
              {projects
                .filter((p) => p.id === selectedProject)
                .map((project) => (
                  <div key={project.id} className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">{project.title}</h2>
                      <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)}>
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="relative h-64 mb-6">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
                    <p className="text-muted-foreground mb-6">{project.longDescription}</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <span>View Live Demo</span>
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


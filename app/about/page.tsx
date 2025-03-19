import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Skills from "@/components/skills"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="relative h-80 w-full md:h-full rounded-lg overflow-hidden">
              <Image
                src="https://img.playbook.com/2UC7BoJpf8bZOy_quUy-OagZOTCNQfmMfwEzMeea9PM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JhMDZiNWZi/LTQ4YjAtNGViNi1i/ZjY4LWQ5ZWZmMTRj/OTU5MQ"
                alt="Profile"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Software Engineer & Full-Stack Developer</h2>
            <p className="text-lg mb-4">
              I'm a passionate software engineer with over 5 years of experience building web applications and digital
              products. I specialize in creating high-performance, scalable solutions using modern technologies.
            </p>
            <p className="text-lg mb-4">
              My journey in software development began during my computer science studies, where I discovered my passion
              for creating elegant solutions to complex problems. Since then, I've worked with startups and established
              companies to deliver impactful digital experiences.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <Skills />
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">Bachelor of Engineering BEng(Hons),Computer Software Engineering</p>
                    <p className="text-muted-foreground">London Metropolitan University, 2025-2026(Undergraduate)</p>
                  </li>
                  <li>
                    <p className="font-semibold">Pearson BTEC Level 5 Higher National Diploma (HND) in Computing (Software Engineering)</p>
                    <p className="text-muted-foreground">Distinction, 2023-2025</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Certifications</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">Validations Skills and Knowledge</p>
                    <p className="text-muted-foreground">Cisco Network Academy and IBM Skillsbuild</p>
                    <a 
                    href="https://www.credly.com/users/thilina-samarasinghe" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                    >
                      Digital Credential
                    </a>
                  </li>
                  {/*<li>
                    <p className="font-semibold">Google Cloud Professional Developer</p>
                    <p className="text-muted-foreground">Google Cloud, 2021</p>
                  </li>
                  <li>
                    <p className="font-semibold">Certified Kubernetes Administrator</p>
                    <p className="text-muted-foreground">Cloud Native Computing Foundation, 2020</p>
                  </li>*/}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Beyond Coding</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Open Source</h3>
                <p>
                  Active contributor to several open-source projects, including React libraries and developer tools.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Technical Writing</h3>
                <p>
                  I regularly write technical articles and tutorials on modern web development, sharing insights and
                  best practices with the community.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Mentoring</h3>
                <p>
                  Passionate about helping others grow in their tech careers through mentoring and teaching coding
                  skills to aspiring developers.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}


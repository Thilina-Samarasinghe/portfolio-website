import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock blog data (in a real app, this would come from a CMS like Contentful or MDX files)
const blogPosts = [
  {
    id: 1,
    title: "Building High-Performance React Applications",
    excerpt: "Learn strategies and best practices for optimizing React applications for speed and efficiency.",
    date: "March 15, 2023",
    readTime: "8 min read",
    slug: "building-high-performance-react-applications",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["React", "Performance"],
  },
  {
    id: 2,
    title: "The Power of Server Components in Next.js",
    excerpt: "Explore how Server Components in Next.js are changing the way we build web applications.",
    date: "February 22, 2023",
    readTime: "6 min read",
    slug: "power-of-server-components-nextjs",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Next.js", "React"],
  },
  {
    id: 3,
    title: "Implementing Authentication in Modern Web Apps",
    excerpt: "A comprehensive guide to implementing secure authentication in your web applications.",
    date: "January 10, 2023",
    readTime: "10 min read",
    slug: "implementing-authentication-modern-web-apps",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Security", "Web Development"],
  },
  {
    id: 4,
    title: "Mastering TypeScript for Better Code Quality",
    excerpt: "How TypeScript can help you write more maintainable and error-free code.",
    date: "December 5, 2022",
    readTime: "7 min read",
    slug: "mastering-typescript-better-code-quality",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["TypeScript", "JavaScript"],
  },
  {
    id: 5,
    title: "Building Accessible Web Applications",
    excerpt: "Best practices for creating web applications that are accessible to everyone.",
    date: "November 18, 2022",
    readTime: "9 min read",
    slug: "building-accessible-web-applications",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Accessibility", "Web Development"],
  },
  {
    id: 6,
    title: "Containerization with Docker: A Practical Guide",
    excerpt: "Learn how to use Docker to containerize your applications for consistent deployment.",
    date: "October 30, 2022",
    readTime: "8 min read",
    slug: "containerization-docker-practical-guide",
    image: "/placeholder.svg?height=600&width=800",
    categories: ["Docker", "DevOps"],
  },
]

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Thoughts, tutorials, and insights on web development, software engineering, and technology.
        </p>

        {/* Featured Post */}
        <div className="mb-16">
          <Link href={`/blog/${blogPosts[0].slug}`} className="block group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex gap-2 mb-4">
                  {blogPosts[0].categories.map((category) => (
                    <Badge key={category} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
              <Card className="h-full overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="flex gap-2 mb-4">
                    {post.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Rocket, Heart, Globe } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering students to become technology leaders through practical learning and innovation.",
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Fostering a culture of creativity, experimentation, and cutting-edge technology exploration.",
    },
    {
      icon: Heart,
      title: "Community Focused",
      description: "Building an inclusive environment where every member can grow, learn, and contribute.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that address real-world challenges and make a positive difference.",
    },
  ]

  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Industry Partners" },
    { number: "100+", label: "Events Hosted" },
  ]

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About TechGenius
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Where Deep Tech Meets
            <span className="block text-primary">Human Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We are a collective of passionate students united by our deep tech knowledge, human-centric mindset, and a
            passion for using technology and digital solutions to drive forward transformation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="TechGenius members collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stats card */}
            <Card className="absolute -bottom-6 -right-6 bg-background/95 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years Active</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">Job Placement</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Our collection of tech services spans various needs at every stage of the transformation process.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Explore how we help students transform their ideas into reality through comprehensive learning programs,
              mentorship opportunities, and hands-on project experiences that prepare them for successful careers in
              technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From beginner-friendly workshops to advanced research projects, we provide a structured pathway for growth
              while fostering innovation and entrepreneurial thinking.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Our Impact in Numbers</h3>
            <p className="text-muted-foreground">Building a stronger tech community, one student at a time</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

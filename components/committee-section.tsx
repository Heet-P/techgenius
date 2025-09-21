"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"

export function CommitteeSection() {
  const committeeMembers = [
    {
      name: "Sarah Chen",
      role: "President",
      department: "Computer Science",
      year: "Senior",
      bio: "Passionate about AI/ML and leading our community towards innovative solutions.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      github: "#",
      email: "sarah@techgenius.edu",
    },
    {
      name: "Marcus Rodriguez",
      role: "Vice President",
      department: "Software Engineering",
      year: "Junior",
      bio: "Full-stack developer focused on building scalable web applications and mentoring newcomers.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      github: "#",
      email: "marcus@techgenius.edu",
    },
    {
      name: "Aisha Patel",
      role: "Technical Lead",
      department: "Data Science",
      year: "Senior",
      bio: "Data enthusiast working on machine learning projects and organizing technical workshops.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      github: "#",
      email: "aisha@techgenius.edu",
    },
    {
      name: "David Kim",
      role: "Events Coordinator",
      department: "Information Systems",
      year: "Sophomore",
      bio: "Organizing hackathons, tech talks, and networking events to connect our community.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      github: "#",
      email: "david@techgenius.edu",
    },
    {
      name: "Emily Johnson",
      role: "Outreach Manager",
      department: "Computer Engineering",
      year: "Junior",
      bio: "Building partnerships with industry leaders and expanding our club's reach.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      github: "#",
      email: "emily@techgenius.edu",
    },
    {
      name: "Alex Thompson",
      role: "Treasurer",
      department: "Business Information Systems",
      year: "Senior",
      bio: "Managing club finances and securing funding for our innovative projects and events.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
      github: "#",
      email: "alex@techgenius.edu",
    },
  ]

  return (
    <section id="committee" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Leadership
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Meet Our Core Committee
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Dedicated leaders driving innovation and fostering a collaborative environment where every member can thrive
            and contribute to our tech community.
          </p>
        </div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {committeeMembers.map((member, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <Badge
                    variant="secondary"
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground"
                  >
                    {member.role}
                  </Badge>
                </div>

                {/* Member Info */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{member.department}</p>
                    <p className="text-sm text-accent">{member.year}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 pt-4">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Committee CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Want to be a techie too?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We are the tech collective of passionate Committed Geniuses, a leading management consultancy helping
            countless organizations succeed in their most important and strategic transformations.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            In our collective, there is always room for more people with that delicious combination of analytical and
            creative strategy.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Join the collective
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

export function CommitteeSection() {
  const committeeMembers = [
    {
      name: "Sarah Chen",
      role: "President",
      department: "Computer Science",
      year: "Senior",
      bio: "Passionate about AI/ML and leading our community towards innovative solutions.",
      fullBio: "Sarah Chen is a distinguished senior Computer Science student who has been leading TechGenius with exceptional vision and dedication. Her passion for artificial intelligence and machine learning has driven numerous groundbreaking initiatives within our community. Under her leadership, TechGenius has expanded its reach, formed strategic partnerships with industry leaders, and launched several successful programs that have benefited hundreds of students. Sarah's commitment to fostering innovation and creating an inclusive environment has made her an inspirational leader who continues to guide our organization toward new heights of excellence.",
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
      fullBio: "Marcus Rodriguez brings extensive experience in full-stack development and a passion for mentoring to his role as Vice President. As a junior Software Engineering student, he has already contributed to multiple large-scale projects and has been instrumental in establishing our mentorship program. His expertise in building scalable web applications has helped numerous club members develop their technical skills, while his approachable nature and dedication to helping others has made him a beloved figure in our community. Marcus continues to bridge the gap between experienced developers and newcomers, ensuring everyone feels welcomed and supported.",
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
      fullBio: "Aisha Patel is a senior Data Science student whose expertise in machine learning and data analytics has been invaluable to TechGenius. As our Technical Lead, she has organized numerous workshops that have educated hundreds of students on cutting-edge technologies. Her research work in predictive analytics and her ability to translate complex concepts into accessible learning materials has made her workshops some of the most popular events in our calendar. Aisha's dedication to advancing technical knowledge within our community continues to inspire both beginners and advanced practitioners in the field of data science.",
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
      fullBio: "David Kim, a sophomore Information Systems student, has revolutionized how TechGenius approaches event management. His innovative approach to organizing hackathons, tech talks, and networking events has significantly increased community engagement and participation. Despite being one of our younger committee members, David's organizational skills and creative event planning have resulted in some of our most successful and memorable events. His ability to coordinate with industry professionals and create meaningful networking opportunities has helped countless members advance their careers and expand their professional networks.",
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
      fullBio: "Emily Johnson serves as our Outreach Manager, where her exceptional communication skills and strategic thinking have been crucial in building partnerships with industry leaders. As a junior Computer Engineering student, she has successfully negotiated partnerships that have provided our members with internship opportunities, mentorship programs, and access to cutting-edge technologies. Her work in expanding our club's reach has resulted in collaborations with major tech companies and increased visibility for TechGenius within the broader tech community. Emily's dedication to creating opportunities for our members continues to open doors for career advancement and professional growth.",
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
      fullBio: "Alex Thompson, a senior Business Information Systems student, has been instrumental in managing TechGenius's financial operations and securing funding for our ambitious projects. His background in business and technology gives him a unique perspective on resource allocation and strategic financial planning. Under his stewardship, the club has successfully secured grants and sponsorships that have enabled us to host larger events, provide better resources to our members, and expand our program offerings. Alex's meticulous approach to financial management and his ability to identify funding opportunities continues to ensure the long-term sustainability and growth of our organization.",
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
                {/* Profile Image with MorphingDialog */}
                <MorphingDialog
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 24,
                  }}
                >
                  <div className="relative mb-6">
                    <MorphingDialogTrigger className="block">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 cursor-pointer hover:scale-110 transition-transform duration-300">
                        <MorphingDialogImage
                          src={member.image || "/placeholder.svg"}
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </MorphingDialogTrigger>
                    <Badge
                      variant="secondary"
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground"
                    >
                      {member.role}
                    </Badge>
                  </div>

                  <MorphingDialogContainer>
                    <MorphingDialogContent className="relative h-auto w-[600px] max-w-[90vw] border border-border bg-background rounded-xl">
                      <ScrollArea className="h-[80vh]" type="scroll">
                        <div className="relative p-8">
                          <div className="flex justify-center py-10">
                            <MorphingDialogImage
                              src={member.image || "/placeholder.svg"}
                              alt={`${member.name} - ${member.role}`}
                              className="h-auto w-[250px] rounded-lg"
                            />
                          </div>
                          <div className="space-y-6 text-center">
                            <div>
                              <MorphingDialogTitle className="text-foreground text-2xl font-bold">
                                {member.name}
                              </MorphingDialogTitle>
                              <MorphingDialogSubtitle className="text-primary text-lg font-medium">
                                {member.role}
                              </MorphingDialogSubtitle>
                              <div className="mt-2 space-y-1">
                                <p className="text-muted-foreground">{member.department}</p>
                                <p className="text-accent">{member.year}</p>
                              </div>
                            </div>
                            
                            <div className="text-left space-y-4">
                              <h4 className="text-lg font-semibold text-foreground">About {member.name.split(' ')[0]}</h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {member.fullBio}
                              </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center space-x-4 pt-6">
                              <Button variant="outline" size="sm" className="h-10 w-10 p-0">
                                <Linkedin className="h-4 w-4" />
                                <span className="sr-only">LinkedIn</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-10 w-10 p-0">
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                              </Button>
                              <Button variant="outline" size="sm" className="h-10 w-10 p-0">
                                <Mail className="h-4 w-4" />
                                <span className="sr-only">Email</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                      <MorphingDialogClose className="text-muted-foreground" />
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>

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
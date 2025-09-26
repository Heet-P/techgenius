"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail, ChevronLeft, ChevronRight } from "lucide-react"
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
import { PrimaryGlowButton } from '@/components/ui/glow-button'
import { ProfileGlowCard } from '@/components/ui/glow-card'

export function CommitteeSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const itemsPerPage = 9 // 3x3 grid

  const committeeMembers = [
    {
      name: "Dr. Amit Thakkar",
      role: "Convener",
      department: "Computer Science & Engineering",
      year: "Head of Department",
      bio: "Passionate about AI/ML and leading our community towards innovative solutions.",
      fullBio: "Dr. Amit Thakkar is the Head Of The Department of Computer Science & Engineering , known for his exceptional vision and dedication to advancing the field of Computer Science. His passion for these technologies has driven numerous groundbreaking initiatives within our community. Under his leadership, TechGenius has expanded its reach, formed strategic partnerships with industry leaders, and launched several successful programs that have benefited hundreds of students. Dr. Thakkar's commitment to fostering innovation and creating an inclusive environment has made him an inspirational leader who continues to guide our organization toward new heights of excellence.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/dr-amit-thakkar-66b52622/",
      github: "#",
      email: "amitthakkar.it@charusat.ac.in",
    },
    {
      name: "Dr. Jigar Sarda",
      role: "Faculty Coordinator",
      department: "Computer Science & Engineering",
      year: "Assistant Professor",
      bio: "No Bio as Of now but we can also add anything that the professor wants just this is a trial one so .",
      fullBio: "Dr. Jigar Sarda is an Assistant Professor in the Department of Computer Science & Engineering, specializing in software engineering and project management. With a strong background in both academia and industry, he brings a wealth of knowledge to his role as Faculty Coordinator. Dr. Sarda is dedicated to fostering a collaborative learning environment and empowering students to achieve their full potential. His commitment to excellence in teaching and mentorship has made a significant impact on the TechGenius community.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/dr-jigar-sarda-00384414/",
      github: "#",
      email: "jigarsarda.ee@charusat.ac.in",
    },
    {
      name: "Srushti Gajjar",
      role: "Faculty Coordinator",
      department: "Computer Science & Engineering",
      year: "Assistant Professor",
      bio: "Data enthusiast working on machine learning projects and organizing technical workshops.",
      fullBio: "Srushti Gajjar is an Assistant Professor in the Department of Computer Science & Engineering, specializing in machine learning and data analytics. Her expertise has been invaluable to TechGenius, where she has organized numerous workshops that have educated hundreds of students on cutting-edge technologies. Srushti's research work in predictive analytics and her ability to translate complex concepts into accessible learning materials has made her workshops some of the most popular events in our calendar. Her dedication to advancing technical knowledge within our community continues to inspire both beginners and advanced practitioners in the field of data science.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://linkedin.com/in/srushti-gajjar",
      github: "https://github.com/srushti-gajjar",
      email: "srushti@techgenius.edu",
    },
    {
      name: "Mishri Bhanwadia",
      role: "President",
      department: "Computer Science & Engineering",
      year: "2nd",
      bio: "Organizing hackathons, tech talks, and networking events to connect our community.",
      fullBio: "Mishri Bhanwadia, a 2nd-year Computer Science & Engineering student, has revolutionized how TechGenius approaches event management. Her innovative approach to organizing hackathons, tech talks, and networking events has significantly increased community engagement and participation. Despite being one of our younger committee members, Mishri's organizational skills and creative event planning have resulted in some of our most successful and memorable events. Her ability to coordinate with industry professionals and create meaningful networking opportunities has helped countless members advance their careers and expand their professional networks.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/mishri-bhanwadia-24700631b/",
      github: "https://github.com/24CS008Mishri",
      email: "24cs008@charusat.edu.in",
    },
    {
      name: "Akshat Patel",
      role: "Vice President",
      department: "Computer Science & Engineering",
      year: "2nd",
      bio: "Building partnerships with industry leaders and expanding our club's reach.",
      fullBio: "Akshat Patel serves as our Vice President, where his exceptional leadership skills and strategic thinking have been crucial in building partnerships with industry leaders. As a 2nd-year Computer Science & Engineering student, he has successfully negotiated partnerships that have provided our members with internship opportunities, mentorship programs, and access to cutting-edge technologies. His work in expanding our club's reach has resulted in collaborations with major tech companies and increased visibility for TechGenius within the broader tech community. Akshat's dedication to creating opportunities for our members continues to open doors for career advancement and professional growth.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/akshat-patelx1405/",
      github: "https://github.com/Akshat14z",
      email: "24cs060@charusat.edu.in",
    },
    {
      name: "Harikesh Patel",
      role: "Treasurer",
      department: "Computer Science & Engineering",
      year: "2nd",
      bio: "Managing club finances and securing funding for our innovative projects and events.",
      fullBio: "Harikesh Patel, a 2nd-year Computer Science & Engineering student, has been instrumental in managing TechGenius's financial operations and securing funding for our ambitious projects. His background in business and technology gives him a unique perspective on resource allocation and strategic financial planning. Under his stewardship, the club has successfully secured grants and sponsorships that have enabled us to host larger events, provide better resources to our members, and expand our program offerings. Harikesh's meticulous approach to financial management and his ability to identify funding opportunities continues to ensure the long-term sustainability and growth of our organization.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/harikesh-patel-059b0331a/",
      github: "https://github.com/Harikesh0501",
      email: "24cs064@charusat.edu.in",
    },
    {
      name: "Heet Parikh",
      role: "Hackathon Coordinator",
      department: "Computer Science & Engineering",
      year: "2nd Year",
      bio: "Organizing hackathons, coding competitions, and tech challenges to foster innovation.",
      fullBio: "Heet Parikh, a 2nd Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, he is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Heet's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. His ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/Garba_Goggles.jpg?height=300&width=300",
      linkedin: "https://linkedin.com/in/heetparikh",
      github: "https://github.com/Heet-P",
      email: "24cs058@charusat.edu.in",
    },
    {
      name: "Dhrumil Amin",
      role: "Hackathon Coordinator",
      department: "Computer Science & Engineering",
      year: "2nd Year",
      bio: "Organizing hackathons, coding competitions, and tech challenges to foster innovation.",
      fullBio: "Dhrumil Amin, a 2nd Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, he is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Dhrumil's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. His ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/dhrumil-amin-47429a260/",
      github: "https://github.com/dhrumil246",
      email: "24cs005@charusat.edu.in",
    },
    {
      name: "Hetvi Taank",
      role: "Hackathon Coordinator",
      department: "Computer Science & Engineering",
      year: "2nd Year",
      bio: "Organizing hackathons, coding competitions, and tech challenges to foster innovation.",
      fullBio: "Hetvi Taank, a 2nd Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, she is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Hetvi's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. Her ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/hetvi-taank/",
      github: "https://github.com/HetviTaank",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Mahek Hirpara",
      role: "Public Relations Head",
      department: "Computer Science & Engineering",
      year: "1st Year",
      bio: "Organizing hackathons, coding competitions, and tech challenges to foster innovation.",
      fullBio: "Mahek, a 1st Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, she is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Hetvi's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. Her ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/hetvi-taank/",
      github: "https://github.com/HetviTaank",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Mahek Hirpara",
      role: "Public Relations Head",
      department: "Computer Science & Engineering",
      year: "1st Year",
      bio: "Organizing hackathons, coding competitions, and tech challenges to foster innovation.",
      fullBio: "Mahek, a 1st Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, she is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Hetvi's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. Her ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/hetvi-taank/",
      github: "https://github.com/HetviTaank",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Mahek Hirpara",
      role: "Public Relations Head",
      department: "Computer Science & Engineering",
      year: "1st Year",
      bio: "Organizing hackathons, coding competitions, and tech challenges to foster innovation.",
      fullBio: "Mahek, a 1st Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, she is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Hetvi's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. Her ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/hetvi-taank/",
      github: "https://github.com/HetviTaank",
      email: "24cs099@charusat.edu.in",
    },
    {
      name: "Mahek Hirpara",
      role: "Public Relations Head",
      department: "Computer Science & Engineering",
      year: "1st Year",
      bio: "Organizing hackathons, coding competitions, and tech challenges to foster innovation.",
      fullBio: "Mahek, a 1st Year Computer Science & Engineering student, is passionate about creating opportunities for students to showcase their skills and collaborate on innovative projects. As the Hackathon Coordinator, she is responsible for planning and executing hackathons and coding competitions that challenge participants to think creatively and work together. Hetvi's dedication to fostering a culture of innovation and collaboration within TechGenius has led to the successful organization of several high-profile events that have attracted participants from across the university. Her ability to connect with students and industry professionals alike has been instrumental in securing sponsorships and resources for these events.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "https://www.linkedin.com/in/hetvi-taank/",
      github: "https://github.com/HetviTaank",
      email: "24cs099@charusat.edu.in",
    },
  ]

  // Calculate pagination
  const totalPages = Math.ceil(committeeMembers.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentMembers = committeeMembers.slice(startIndex, endIndex)

  const goToNextPage = () => {
    if (isTransitioning || currentPage >= totalPages - 1) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
      setIsTransitioning(false)
    }, 150)
  }

  const goToPrevPage = () => {
    if (isTransitioning || currentPage <= 0) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
      setIsTransitioning(false)
    }, 150)
  }

  const goToPage = (page: number) => {
    if (isTransitioning || page === currentPage) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      setIsTransitioning(false)
    }, 150)
  }

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

        {/* Committee Grid with Side Navigation */}
        <div className="relative">
          {/* Left Arrow - Only show if not on first page and multiple pages exist */}
          {totalPages > 1 && currentPage > 0 && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 hidden lg:block">
              <Button
                variant="outline"
                size="lg"
                onClick={goToPrevPage}
                disabled={isTransitioning}
                className="h-12 w-12 p-0 rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous page</span>
              </Button>
            </div>
          )}

          {/* Right Arrow - Only show if not on last page and multiple pages exist */}
          {totalPages > 1 && currentPage < totalPages - 1 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 hidden lg:block">
              <Button
                variant="outline"
                size="lg"
                onClick={goToNextPage}
                disabled={isTransitioning}
                className="h-12 w-12 p-0 rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          )}

          {/* Committee Grid - Current Page with smooth transitions */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            {currentMembers.map((member, index) => (
              <ProfileGlowCard key={startIndex + index}>
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

                              {/* Social Links in Modal - MADE CLICKABLE */}
                              <div className="flex justify-center space-x-4 pt-6">
                                <Button variant="outline" size="sm" className="h-10 w-10 p-0" asChild>
                                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-4 w-4" />
                                    <span className="sr-only">LinkedIn Profile</span>
                                  </a>
                                </Button>
                                <Button variant="outline" size="sm" className="h-10 w-10 p-0" asChild>
                                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4" />
                                    <span className="sr-only">GitHub Profile</span>
                                  </a>
                                </Button>
                                <Button variant="outline" size="sm" className="h-10 w-10 p-0" asChild>
                                  <a href={`mailto:${member.email}`}>
                                    <Mail className="h-4 w-4" />
                                    <span className="sr-only">Send Email</span>
                                  </a>
                                </Button>
                              </div>

                              <div className="pt-6">
                                <Button variant="outline" size="lg" asChild>
                                  <a href={`mailto:${member.email}?subject=Hello ${member.name.split(' ')[0]}&body=Hi ${member.name.split(' ')[0]}, I would like to connect with you regarding TechGenius.`}>
                                    Connect with {member.name.split(' ')[0]}
                                  </a>
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

                    {/* Social Links on Cards - MADE CLICKABLE */}
                    <div className="flex justify-center space-x-3 pt-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/50 dark:hover:text-blue-400" 
                        asChild
                      >
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn Profile</span>
                        </a>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 hover:bg-purple-100 hover:text-purple-900 dark:hover:bg-purple-700 dark:hover:text-purple-400" 
                        asChild
                      >
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub Profile</span>
                        </a>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/50 dark:hover:text-red-400" 
                        asChild
                      >
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                          <span className="sr-only">Send Email</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </ProfileGlowCard>
            ))}
          </div>
        </div>

        {/* Page Indicators - Centered below grid */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-12 mb-8">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i}
                variant={currentPage === i ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(i)}
                disabled={isTransitioning}
                className={`h-3 w-3 p-0 rounded-full transition-all duration-300 ${
                  currentPage === i 
                    ? "bg-primary scale-125" 
                    : "bg-muted hover:bg-muted-foreground/20 scale-100"
                }`}
              >
                <span className="sr-only">Go to page {i + 1}</span>
              </Button>
            ))}
          </div>
        )}

        {/* Mobile Navigation - Only show on smaller screens */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mb-8 lg:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevPage}
              disabled={isTransitioning || currentPage <= 0}
              className="h-10 w-10 p-0"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            
            <span className="text-sm text-muted-foreground">
              Page {currentPage + 1} of {totalPages}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNextPage}
              disabled={isTransitioning || currentPage >= totalPages - 1}
              className="h-10 w-10 p-0"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        )}

        {/* Page Info */}
        {totalPages > 1 && (
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              Showing {currentMembers.length} of {committeeMembers.length} members
            </p>
          </div>
        )}

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
          <PrimaryGlowButton size="lg">
            Join Our Community
          </PrimaryGlowButton>
        </div>
      </div>
    </section>
  )
}
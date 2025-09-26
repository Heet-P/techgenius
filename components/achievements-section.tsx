"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Target, Zap, Users, Calendar, MapPin } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from '@/components/ui/carousel'

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "National Hackathon Champions",
      description: "First place at the National Student Technology Competition 2023",
      year: "2023",
      category: "Competition",
      impact: "Represented university at international level",
      image: "/placeholder.svg?height=200&width=300",
      details: "Our team of 5 students developed an innovative AI-powered sustainability tracking app that impressed judges with its technical excellence and real-world impact potential.",
    },
    {
      icon: Award,
      title: "Best Student Organization",
      description: "Awarded by University Student Affairs for outstanding community impact",
      year: "2023",
      category: "Recognition",
      impact: "Recognized for leadership and innovation",
      image: "/placeholder.svg?height=200&width=300",
      details: "Recognized for our exceptional leadership in fostering innovation, building community, and creating meaningful opportunities for student growth.",
    },
    {
      icon: Star,
      title: "500+ Alumni Network",
      description: "Built a strong network of graduates working at top tech companies",
      year: "2024",
      category: "Community",
      impact: "95% job placement rate for members",
      image: "/placeholder.svg?height=200&width=300",
      details: "Our alumni work at leading companies including Google, Microsoft, Apple, Meta, and numerous successful startups across the globe.",
    },
    {
      icon: Target,
      title: "50+ Successful Projects",
      description: "Completed projects ranging from mobile apps to AI research initiatives",
      year: "2024",
      category: "Innovation",
      impact: "3 projects commercialized successfully",
      image: "/placeholder.svg?height=200&width=300",
      details: "From mobile applications with 10K+ downloads to research papers published in top-tier conferences, our projects showcase real-world impact.",
    },
    {
      icon: Zap,
      title: "Industry Partnership Program",
      description: "Established partnerships with 25+ leading technology companies",
      year: "2023",
      category: "Partnership",
      impact: "200+ internship opportunities created",
      image: "/placeholder.svg?height=200&width=300",
      details: "Strategic partnerships with industry leaders provide our members with exclusive internship opportunities, mentorship programs, and career pathways.",
    },
    {
      icon: Users,
      title: "Diversity & Inclusion Award",
      description: "Recognized for promoting diversity in STEM and inclusive community building",
      year: "2022",
      category: "Social Impact",
      impact: "40% increase in underrepresented participation",
      image: "/placeholder.svg?height=200&width=300",
      details: "Our commitment to diversity has created a welcoming environment where students from all backgrounds can thrive and contribute to technology innovation.",
    },
  ]

  // Updated detailed timeline for 2025 with specific dates
  const milestones = [
    { 
      date: "January 15, 2025", 
      month: "Jan", 
      year: "2025",
      event: "Spring Semester Kickoff", 
      description: "Launched new semester with record 150+ new member registrations",
      category: "Growth",
      location: "Main Auditorium"
    },
    { 
      date: "February 22, 2025", 
      month: "Feb", 
      year: "2025",
      event: "AI Workshop Series Launch", 
      description: "Started comprehensive 6-week AI/ML workshop series with industry experts",
      category: "Education",
      location: "Tech Innovation Lab"
    },
    { 
      date: "March 18, 2025", 
      month: "Mar", 
      year: "2025",
      event: "Spring Hackathon 2025", 
      description: "Hosted 48-hour hackathon with 200+ participants and $25K in prizes",
      category: "Competition",
      location: "Engineering Complex"
    },
    { 
      date: "April 10, 2025", 
      month: "Apr", 
      year: "2025",
      event: "Industry Career Fair", 
      description: "Connected 300+ students with 40 tech companies for internships and jobs",
      category: "Career",
      location: "Student Union Center"
    },
    { 
      date: "May 5, 2025", 
      month: "May", 
      year: "2025",
      event: "Research Symposium", 
      description: "Showcased 25 student research projects with 8 published papers",
      category: "Research",
      location: "Science Building"
    },
    { 
      date: "June 20, 2025", 
      month: "Jun", 
      year: "2025",
      event: "Summer Bootcamp", 
      description: "Launched intensive full-stack development bootcamp for 50 participants",
      category: "Education",
      location: "Computer Science Building"
    },
    { 
      date: "July 28, 2025", 
      month: "Jul", 
      year: "2025",
      event: "Alumni Reunion & Networking", 
      description: "Brought together 200+ alumni for networking and mentorship event",
      category: "Community",
      location: "Grand Ballroom"
    },
    { 
      date: "August 15, 2025", 
      month: "Aug", 
      year: "2025",
      event: "New Member Orientation", 
      description: "Welcomed 180+ new members with comprehensive orientation program",
      category: "Growth",
      location: "Campus Center"
    },
    { 
      date: "September 12, 2025", 
      month: "Sep", 
      year: "2025",
      event: "Tech Startup Showcase", 
      description: "Featured 15 student startups with $100K total funding raised",
      category: "Innovation",
      location: "Innovation Hub"
    },
    { 
      date: "October 30, 2025", 
      month: "Oct", 
      year: "2025",
      event: "Fall Tech Conference", 
      description: "Organized major tech conference with 500+ attendees and keynote speakers",
      category: "Event",
      location: "Convention Center"
    },
    { 
      date: "November 18, 2025", 
      month: "Nov", 
      year: "2025",
      event: "Cybersecurity Competition", 
      description: "Hosted regional cybersecurity challenge with 120+ teams participating",
      category: "Competition",
      location: "Cybersecurity Lab"
    },
    { 
      date: "December 10, 2025", 
      month: "Dec", 
      year: "2025",
      event: "Year-End Celebration", 
      description: "Celebrated achievements with awards ceremony and 600+ community members",
      category: "Community",
      location: "Grand Hall"
    },
  ]

  const stats = [
    { number: "6", label: "Years of Excellence", icon: Trophy },
    { number: "20+", label: "Awards Won", icon: Award },
    { number: "75+", label: "Projects Completed", icon: Target },
    { number: "98%", label: "Job Placement Rate", icon: Star },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Growth": return "bg-green-500/20 text-green-700 dark:text-green-300"
      case "Education": return "bg-blue-500/20 text-blue-700 dark:text-blue-300"
      case "Competition": return "bg-purple-500/20 text-purple-700 dark:text-purple-300"
      case "Career": return "bg-orange-500/20 text-orange-700 dark:text-orange-300"
      case "Research": return "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300"
      case "Community": return "bg-pink-500/20 text-pink-700 dark:text-pink-300"
      case "Innovation": return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300"
      case "Event": return "bg-red-500/20 text-red-700 dark:text-red-300"
      default: return "bg-primary/20 text-primary"
    }
  }

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Achievements
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Celebrating Excellence and
            <span className="block text-primary">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our journey is marked by significant milestones, recognition, and the success of our community members who
            continue to make an impact in the tech industry.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-primary/10 to-accent/10 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Carousel */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Major Achievements</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our most significant accomplishments and recognition that showcase our commitment to excellence.
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto group">
            <Carousel>
              <CarouselContent>
                {achievements.map((achievement, index) => (
                  <CarouselItem key={index} className="p-4">
                    <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Achievement Image */}
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden mb-6">
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Achievement Content */}
                        <div className="flex-1 space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {achievement.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{achievement.year}</span>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <achievement.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                                {achievement.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                {achievement.description}
                              </p>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                {achievement.details}
                              </p>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-border/50">
                            <p className="text-xs text-accent font-medium">Impact: {achievement.impact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNavigation alwaysShow />
              <CarouselIndicator />
            </Carousel>
          </div>
        </div>

        {/* Enhanced Timeline for 2025 - FIXED ALTERNATING LAYOUT */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">2025 Journey Timeline</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow our incredible year of growth, innovation, and community building throughout 2025.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary hidden lg:block" />

            <div className="space-y-8 lg:space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Mobile Timeline */}
                  <div className="lg:hidden flex items-start">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-2 shadow-lg">
                        <span className="text-xs font-bold text-primary-foreground">{milestone.month}</span>
                      </div>
                      {index < milestones.length - 1 && <div className="w-0.5 h-20 bg-border" />}
                    </div>

                    <div className="flex-1">
                      <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span className="font-medium">{milestone.date}</span>
                            </div>
                            <Badge className={`text-xs ${getCategoryColor(milestone.category)}`}>
                              {milestone.category}
                            </Badge>
                          </div>
                          <h4 className="text-lg font-bold text-foreground mb-2">
                            {milestone.event}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {milestone.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{milestone.location}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Desktop Timeline - PROPERLY ALTERNATING */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center relative">
                    {/* Left Side Content (Even indices - 0, 2, 4, etc.) */}
                    {index % 2 === 0 ? (
                      <>
                        {/* Content on left */}
                        <div className="text-right">
                          <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-end gap-3 mb-3">
                                <Badge className={`text-xs ${getCategoryColor(milestone.category)}`}>
                                  {milestone.category}
                                </Badge>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="h-4 w-4" />
                                  <span className="font-medium">{milestone.date}</span>
                                </div>
                              </div>
                              <h4 className="text-lg font-bold text-foreground mb-2">
                                {milestone.event}
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                {milestone.description}
                              </p>
                              <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                <span>{milestone.location}</span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        {/* Empty right side */}
                        <div></div>
                      </>
                    ) : (
                      <>
                        {/* Empty left side */}
                        <div></div>
                        {/* Content on right */}
                        <div className="text-left">
                          <Card className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="h-4 w-4" />
                                  <span className="font-medium">{milestone.date}</span>
                                </div>
                                <Badge className={`text-xs ${getCategoryColor(milestone.category)}`}>
                                  {milestone.category}
                                </Badge>
                              </div>
                              <h4 className="text-lg font-bold text-foreground mb-2">
                                {milestone.event}
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                {milestone.description}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                <span>{milestone.location}</span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </>
                    )}

                    {/* Center Timeline Dot */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

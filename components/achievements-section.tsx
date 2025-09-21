"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Target, Zap, Users } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "National Hackathon Champions",
      description: "First place at the National Student Technology Competition 2023",
      year: "2023",
      category: "Competition",
      impact: "Represented university at international level",
    },
    {
      icon: Award,
      title: "Best Student Organization",
      description: "Awarded by University Student Affairs for outstanding community impact",
      year: "2023",
      category: "Recognition",
      impact: "Recognized for leadership and innovation",
    },
    {
      icon: Star,
      title: "500+ Alumni Network",
      description: "Built a strong network of graduates working at top tech companies",
      year: "2024",
      category: "Community",
      impact: "95% job placement rate for members",
    },
    {
      icon: Target,
      title: "50+ Successful Projects",
      description: "Completed projects ranging from mobile apps to AI research initiatives",
      year: "2024",
      category: "Innovation",
      impact: "3 projects commercialized successfully",
    },
    {
      icon: Zap,
      title: "Industry Partnership Program",
      description: "Established partnerships with 25+ leading technology companies",
      year: "2023",
      category: "Partnership",
      impact: "200+ internship opportunities created",
    },
    {
      icon: Users,
      title: "Diversity & Inclusion Award",
      description: "Recognized for promoting diversity in STEM and inclusive community building",
      year: "2022",
      category: "Social Impact",
      impact: "40% increase in underrepresented participation",
    },
  ]

  const milestones = [
    { year: "2019", event: "TechGenius Founded", description: "Started with 15 passionate students" },
    { year: "2020", event: "First Hackathon", description: "Organized our inaugural 24-hour coding event" },
    { year: "2021", event: "100 Members", description: "Reached our first major membership milestone" },
    { year: "2022", event: "Industry Partnerships", description: "Established first corporate partnerships" },
    { year: "2023", event: "National Recognition", description: "Won national competition and awards" },
    { year: "2024", event: "500+ Community", description: "Became largest tech club on campus" },
  ]

  const stats = [
    { number: "5", label: "Years of Excellence", icon: Trophy },
    { number: "15+", label: "Awards Won", icon: Award },
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "95%", label: "Job Placement Rate", icon: Star },
  ]

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

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {achievement.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{achievement.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-xs text-accent font-medium">Impact: {achievement.impact}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Our Journey Through Time</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a leading tech community, here are the key milestones that shaped our
              story.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:space-x-8`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}
                  >
                    <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{milestone.event}</h4>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background flex-shrink-0 z-10 hidden lg:block" />

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

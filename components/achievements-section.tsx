"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Target, Zap, Users, Calendar, MapPin, Loader2 } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from '@/components/ui/carousel'
import type { Achievement } from "@/lib/db"

// Icon mapping for different categories
const categoryIcons: Record<string, any> = {
  "Competition": Trophy,
  "Recognition": Award,
  "Community": Users,
  "Innovation": Target,
  "Partnership": Zap,
  "Social Impact": Star,
  "Technical": Target,
}

export function AchievementsSection() {
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchAchievements()
  }, [])

  const fetchAchievements = async () => {
    try {
      const response = await fetch("/api/achievements")
      if (!response.ok) throw new Error("Failed to fetch achievements")

      const data = await response.json()
      setAchievements(data.achievements || [])
    } catch (err) {
      console.error("Error fetching achievements:", err)
      setError("Failed to load achievements")
    } finally {
      setLoading(false)
    }
  }

  const stats = [
    { number: "2", label: "Years of Excellence", icon: Trophy },
    { number: "10+", label: "Projects Completed", icon: Target },
    { number: "100%", label: "Enjoyment & Learning", icon: Star },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-destructive">{error}</p>
              </div>
            ) : achievements.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No achievements to display yet.</p>
              </div>
            ) : (
              <Carousel>
                <CarouselContent>
                  {achievements.map((achievement, index) => {
                    const IconComponent = categoryIcons[achievement.category] || Trophy
                    return (
                      <CarouselItem key={achievement.id} className="p-4">
                        <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 h-full">
                          <CardContent className="p-6 h-full flex flex-col">
                            {/* Achievement Image */}
                            {achievement.image && (
                              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden mb-6">
                                <img
                                  src={achievement.image}
                                  alt={achievement.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                            )}

                            {/* Achievement Content */}
                            <div className="flex-1 space-y-4">
                              <div className="flex items-center justify-between">
                                <Badge variant="outline" className="text-xs">
                                  {achievement.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground">{achievement.date}</span>
                              </div>

                              <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                                    {achievement.title}
                                  </h3>
                                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    {achievement.description}
                                  </p>
                                  {achievement.details && (
                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                      {achievement.details}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {achievement.impact && (
                                <div className="pt-4 border-t border-border/50">
                                  <p className="text-xs text-accent font-medium">Impact: {achievement.impact}</p>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    )
                  })}
                </CarouselContent>
                <CarouselNavigation alwaysShow />
                <CarouselIndicator />
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

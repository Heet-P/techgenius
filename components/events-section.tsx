"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Clock, ExternalLink, Loader2 } from "lucide-react"
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
import { EventGlowCard } from '@/components/ui/glow-card'
import type { Event } from "@/lib/db"

export function EventsSection() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])
  const [pastEvents, setPastEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events')
      if (!response.ok) throw new Error('Failed to fetch events')

      const data = await response.json()
      const events = data.events || []

      // Separate upcoming and past events
      const upcoming = events.filter((e: Event) => e.status === 'upcoming')
      const past = events.filter((e: Event) => e.status === 'past')

      setUpcomingEvents(upcoming)
      setPastEvents(past)
    } catch (err) {
      console.error('Error fetching events:', err)
      setError('Failed to load events')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section id="events" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="events" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-destructive">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="events" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Events & Activities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Learn, Build, and Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join our diverse range of events designed to enhance your technical skills, expand your network, and
            accelerate your career in technology.
          </p>
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          {/* Upcoming Events */}
          <TabsContent value="upcoming" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventGlowCard key={index}>
                  <MorphingDialog
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 24,
                    }}
                  >
                    <MorphingDialogTrigger className="block">
                      <div className="aspect-video rounded-t-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 cursor-pointer">
                        <MorphingDialogImage
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </MorphingDialogTrigger>

                    <MorphingDialogContainer>
                      <MorphingDialogContent className="relative h-auto w-[700px] max-w-[90vw] border border-border bg-background rounded-xl">
                        <ScrollArea className="h-[80vh]" type="scroll">
                          <div className="relative p-8">
                            <div className="flex justify-center py-6">
                              <MorphingDialogImage
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                className="h-auto w-full max-w-[500px] rounded-lg"
                              />
                            </div>
                            <div className="space-y-6">
                              <div>
                                <div className="flex items-center justify-between mb-4">
                                  <Badge variant="secondary">{event.type}</Badge>
                                  <div className="flex items-center text-sm text-muted-foreground">
                                    <Users className="h-4 w-4 mr-1" />
                                    {event.attendees}/{event.max_attendees}
                                  </div>
                                </div>
                                <MorphingDialogTitle className="text-foreground text-2xl font-bold mb-2">
                                  {event.title}
                                </MorphingDialogTitle>
                                <MorphingDialogSubtitle className="text-muted-foreground text-lg">
                                  {event.date} • {event.time}
                                </MorphingDialogSubtitle>
                              </div>

                              <div className="space-y-4 text-sm">
                                <div className="flex items-center text-muted-foreground">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  {event.date}
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <Clock className="h-4 w-4 mr-2" />
                                  {event.time}
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  {event.location}
                                </div>
                              </div>

                              <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-foreground">About This Event</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                  {event.full_description}
                                </p>
                              </div>

                              <PrimaryGlowButton
                                size="lg"
                                onClick={() => window.open('https://forms.gle/ZaKA57t3o5VX1Qi8A', '_blank')}
                              >
                                Join Our Community
                              </PrimaryGlowButton>
                            </div>
                          </div>
                        </ScrollArea>
                        <MorphingDialogClose className="text-muted-foreground" />
                      </MorphingDialogContent>
                    </MorphingDialogContainer>
                  </MorphingDialog>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{event.type}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees}/{event.max_attendees}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>

                    <PrimaryGlowButton size="lg">
                      Register Now
                    </PrimaryGlowButton>
                  </CardContent>
                </EventGlowCard>
              ))}
            </div>
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <Card
                  key={index}
                  className="group bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80 transition-all duration-300"
                >
                  <MorphingDialog
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 24,
                    }}
                  >
                    <MorphingDialogTrigger className="block">
                      <div className="aspect-video rounded-t-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 cursor-pointer">
                        <MorphingDialogImage
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </MorphingDialogTrigger>

                    <MorphingDialogContainer>
                      <MorphingDialogContent className="relative h-auto w-[700px] max-w-[90vw] border border-border bg-background rounded-xl">
                        <ScrollArea className="h-[80vh]" type="scroll">
                          <div className="relative p-8">
                            <div className="flex justify-center py-6">
                              <MorphingDialogImage
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                className="h-auto w-full max-w-[500px] rounded-lg"
                              />
                            </div>
                            <div className="space-y-6">
                              <div>
                                <div className="flex items-center justify-between mb-4">
                                  <Badge variant="outline">{event.type}</Badge>
                                  <div className="flex items-center text-sm text-muted-foreground">
                                    <Users className="h-4 w-4 mr-1" />
                                    {event.attendees}
                                  </div>
                                </div>
                                <MorphingDialogTitle className="text-foreground text-2xl font-bold mb-2">
                                  {event.title}
                                </MorphingDialogTitle>
                                <MorphingDialogSubtitle className="text-muted-foreground text-lg">
                                  {event.date} • {event.time}
                                </MorphingDialogSubtitle>
                              </div>

                              <div className="space-y-4 text-sm">
                                <div className="flex items-center text-muted-foreground">
                                  <Calendar className="h-4 w-4 mr-2" />
                                  {event.date}
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <Clock className="h-4 w-4 mr-2" />
                                  {event.time}
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  {event.location}
                                </div>
                              </div>

                              <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-foreground">Event Summary</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                  {event.full_description}
                                </p>
                              </div>

                              {/* Event Highlights */}
                              <div className="space-y-2">
                                <h4 className="text-lg font-semibold text-foreground">Event Highlights</h4>
                                <div className="flex flex-wrap gap-2">
                                  {event.highlights.map((highlight, idx) => (
                                    <Badge key={idx} variant="outline" className="text-sm">
                                      {highlight}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </ScrollArea>
                        <MorphingDialogClose className="text-muted-foreground" />
                      </MorphingDialogContent>
                    </MorphingDialogContainer>
                  </MorphingDialog>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{event.type}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-foreground">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>

                    {/* Event Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Event Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {event.highlights.map((highlight, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Never Miss an Event</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Stay updated with our latest events, workshops, and networking opportunities. Join our community to receive
            exclusive invitations and early access to registrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryGlowButton size="lg" className="text-lg px-8 py-6" onClick={() => window.open('https://chat.whatsapp.com/Kx8aaL2iXMXIUzbqBRDZFI?mode=gi_t', '_blank')}>
              Get Regular Updates
            </PrimaryGlowButton>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react"

export function EventsSection() {
  const upcomingEvents = [
    {
      title: "AI/ML Workshop Series",
      date: "March 15, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Lab 101",
      attendees: 45,
      maxAttendees: 50,
      type: "Workshop",
      description:
        "Hands-on introduction to machine learning with Python and TensorFlow. Perfect for beginners looking to dive into AI.",
      image: "/placeholder.svg?height=200&width=400",
      registrationLink: "#",
    },
    {
      title: "Spring Hackathon 2024",
      date: "March 22-24, 2024",
      time: "48 Hours",
      location: "Innovation Center",
      attendees: 120,
      maxAttendees: 150,
      type: "Hackathon",
      description:
        "48-hour coding marathon focused on sustainable technology solutions. Prizes worth $10,000 up for grabs!",
      image: "/placeholder.svg?height=200&width=400",
      registrationLink: "#",
    },
    {
      title: "Industry Tech Talk: Future of Web3",
      date: "April 5, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Auditorium A",
      attendees: 85,
      maxAttendees: 200,
      type: "Tech Talk",
      description:
        "Leading blockchain experts discuss the future of decentralized web and career opportunities in Web3.",
      image: "/placeholder.svg?height=200&width=400",
      registrationLink: "#",
    },
  ]

  const pastEvents = [
    {
      title: "Winter Code Challenge",
      date: "February 10, 2024",
      time: "24 Hours",
      location: "Virtual",
      attendees: 95,
      type: "Competition",
      description: "Online coding competition with algorithmic challenges. Great networking and learning experience.",
      image: "/placeholder.svg?height=200&width=400",
      highlights: ["95 participants", "15 prizes awarded", "Industry mentors"],
    },
    {
      title: "React & Next.js Bootcamp",
      date: "January 20-21, 2024",
      time: "Weekend Intensive",
      location: "Tech Lab 102",
      attendees: 30,
      type: "Bootcamp",
      description: "Intensive weekend bootcamp covering modern React development and Next.js framework.",
      image: "/placeholder.svg?height=200&width=400",
      highlights: ["30 participants", "5 projects built", "100% completion rate"],
    },
    {
      title: "Cybersecurity Awareness Week",
      date: "December 4-8, 2023",
      time: "Full Week",
      location: "Multiple Venues",
      attendees: 200,
      type: "Workshop Series",
      description: "Week-long series of workshops, talks, and hands-on labs focused on cybersecurity best practices.",
      image: "/placeholder.svg?height=200&width=400",
      highlights: ["200+ participants", "5 workshops", "Industry partnerships"],
    },
  ]

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
                <Card
                  key={index}
                  className="group bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80 transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-video rounded-t-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{event.type}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {event.attendees}/{event.maxAttendees}
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

                    <Button className="w-full group/btn">
                      Register Now
                      <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
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
                  <div className="aspect-video rounded-t-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
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
            <Button size="lg" className="text-lg px-8 py-6">
              Join Our Newsletter
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              View Event Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

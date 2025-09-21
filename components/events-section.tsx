"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react"
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
      description: "Hands-on introduction to machine learning with Python and TensorFlow. Perfect for beginners looking to dive into AI.",
      fullDescription: "Join us for an intensive hands-on workshop series focusing on artificial intelligence and machine learning fundamentals. This comprehensive session will cover the essential concepts of machine learning, practical implementation using Python and TensorFlow, and real-world applications. Participants will work through guided exercises, build their first ML models, and learn best practices for data preprocessing and model evaluation. Whether you're a complete beginner or looking to solidify your understanding, this workshop provides the perfect foundation for your AI/ML journey. All materials and datasets will be provided, and participants will leave with working code examples and resources for continued learning.",
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
      description: "48-hour coding marathon focused on sustainable technology solutions. Prizes worth $10,000 up for grabs!",
      fullDescription: "Get ready for our biggest hackathon of the year! This 48-hour coding marathon brings together the brightest minds to tackle sustainability challenges through innovative technology solutions. Teams will compete across multiple tracks including Clean Energy, Environmental Monitoring, Sustainable Transportation, and Circular Economy. With over $10,000 in prizes, mentorship from industry experts, and the chance to present to leading VCs, this event offers unparalleled opportunities for learning, networking, and potential startup formation. Participants will have access to cutting-edge APIs, cloud computing resources, and hardware prototyping kits. Food, refreshments, and accommodation will be provided throughout the event.",
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
      description: "Leading blockchain experts discuss the future of decentralized web and career opportunities in Web3.",
      fullDescription: "Join us for an exclusive tech talk featuring leading blockchain experts and Web3 pioneers who will share insights about the future of decentralized technologies. This session will explore the evolving landscape of blockchain applications, decentralized finance (DeFi), NFTs, and the metaverse. Our distinguished speakers will discuss real-world implementations, current challenges, and emerging opportunities in the Web3 space. The talk will also cover career pathways in blockchain development, smart contract engineering, and decentralized application (dApp) design. Attendees will have the opportunity to network with industry professionals and learn about internship and full-time opportunities in this rapidly growing field.",
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
      fullDescription: "Our Winter Code Challenge was a thrilling 24-hour virtual competition that brought together 95 participants from universities across the region. The event featured progressively challenging algorithmic problems designed to test participants' problem-solving skills, coding efficiency, and creativity. Competitors worked through data structures, dynamic programming, graph theory, and optimization challenges while racing against the clock. The event fostered incredible networking opportunities through virtual breakout rooms, mentor sessions, and a collaborative learning environment. Winners received tech gadgets, course vouchers, and interview opportunities with our partner companies.",
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
      fullDescription: "This intensive weekend bootcamp provided comprehensive training in modern React development and the Next.js framework. Over two full days, participants learned React fundamentals, hooks, state management, and advanced patterns before diving deep into Next.js features including server-side rendering, static site generation, and API routes. The hands-on curriculum included building a complete full-stack application from scratch, implementing authentication, database integration, and deployment strategies. All 30 participants successfully completed their projects and gained practical experience with industry-standard development practices.",
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
      fullDescription: "Cybersecurity Awareness Week was our most comprehensive educational initiative, spanning five full days of workshops, talks, and hands-on laboratories. The program covered essential cybersecurity topics including network security, ethical hacking, incident response, privacy protection, and security policy development. Industry professionals led specialized sessions on penetration testing, digital forensics, and security architecture. Over 200 participants engaged in practical exercises using virtual environments and real-world scenarios. The week concluded with a simulated cyber attack exercise where teams applied their newly acquired skills to defend against various threat vectors.",
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
                                    {event.attendees}/{event.maxAttendees}
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
                                  {event.fullDescription}
                                </p>
                              </div>

                              <Button className="w-full group/btn">
                                Register Now
                                <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
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
                                  {event.fullDescription}
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
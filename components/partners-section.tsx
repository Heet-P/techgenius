"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function PartnersSection() {
  const partners = [
    {
      name: "TechCorp Solutions",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Platinum",
      description: "Leading cloud infrastructure provider offering internships and mentorship programs.",
      benefits: ["10+ Internships", "Mentorship Program", "Cloud Credits"],
    },
    {
      name: "InnovateLabs",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Gold",
      description: "AI research company providing cutting-edge project opportunities and funding.",
      benefits: ["Research Projects", "Funding Support", "Lab Access"],
    },
    {
      name: "DataFlow Systems",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Gold",
      description: "Big data analytics firm offering real-world project experience and career guidance.",
      benefits: ["Project Collaboration", "Career Guidance", "Data Access"],
    },
    {
      name: "CyberSecure Inc",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Silver",
      description: "Cybersecurity specialist providing security training and certification programs.",
      benefits: ["Security Training", "Certifications", "Workshop Support"],
    },
    {
      name: "MobileFirst Studios",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Silver",
      description: "Mobile app development company offering design workshops and development tools.",
      benefits: ["Design Workshops", "Dev Tools", "App Store Credits"],
    },
    {
      name: "StartupHub Accelerator",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Bronze",
      description: "Startup accelerator providing entrepreneurship support and networking opportunities.",
      benefits: ["Startup Support", "Networking", "Pitch Opportunities"],
    },
  ]

  const partnershipBenefits = [
    {
      title: "Internship Opportunities",
      description: "Direct access to internship programs at leading tech companies",
      count: "200+",
    },
    {
      title: "Mentorship Programs",
      description: "One-on-one guidance from industry professionals",
      count: "50+",
    },
    {
      title: "Project Collaborations",
      description: "Real-world projects with industry partners",
      count: "25+",
    },
    {
      title: "Career Placement",
      description: "Job placement assistance and career guidance",
      count: "95%",
    },
  ]

  const getPartnerTypeColor = (type: string) => {
    switch (type) {
      case "Platinum":
        return "bg-gradient-to-r from-slate-400 to-slate-600 text-white"
      case "Gold":
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
      case "Silver":
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-white"
      case "Bronze":
        return "bg-gradient-to-r from-amber-600 to-amber-800 text-white"
      default:
        return "bg-primary text-primary-foreground"
    }
  }

  return (
    <section id="partners" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Partners
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Industry Leaders
            <span className="block text-primary">Supporting Our Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We collaborate with leading technology companies to provide our members with unparalleled opportunities for
            learning, growth, and career advancement.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {partnershipBenefits.map((benefit, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-border/50 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{benefit.count}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="group bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Partner Logo */}
                <div className="aspect-[2/1] bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Partner Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <Badge className={getPartnerTypeColor(partner.type)}>{partner.type}</Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Partnership Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.benefits.map((benefit, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Become a Partner</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our network of industry leaders and help shape the next generation of technology professionals. Partner
            with us to access top talent, drive innovation, and make a lasting impact on the tech community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Partnership Inquiry
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Download Partnership Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

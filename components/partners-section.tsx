"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

export function PartnersSection() {
  const partners = [
    {
      name: "TechCorp Solutions",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Platinum",
      description: "Leading cloud infrastructure provider offering internships and mentorship programs.",
      fullDescription: "TechCorp Solutions is a pioneering cloud infrastructure company that has been at the forefront of digital transformation for over a decade. As our premier Platinum partner, they provide unparalleled opportunities for our members through comprehensive internship programs, one-on-one mentorship with senior engineers, and access to cutting-edge cloud technologies. Their partnership with TechGenius has resulted in over 50 successful internships, with 85% of participants receiving full-time offers. TechCorp's commitment to education and talent development aligns perfectly with our mission to empower the next generation of technology leaders.",
      benefits: ["10+ Internships", "Mentorship Program", "Cloud Credits"],
      website: "https://techcorp.example.com",
      founded: "2010",
      employees: "5000+",
      locations: "25+ countries",
    },
    {
      name: "InnovateLabs",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Gold",
      description: "AI research company providing cutting-edge project opportunities and funding.",
      fullDescription: "InnovateLabs stands as a beacon of innovation in artificial intelligence research and development. This Gold-tier partner specializes in breakthrough AI technologies, from natural language processing to computer vision and autonomous systems. Their collaboration with TechGenius includes funding for student research projects, access to proprietary datasets, and opportunities to work alongside PhD researchers on cutting-edge initiatives. InnovateLabs has sponsored 15 student research projects, with 3 resulting in published papers and 2 leading to startup formations. Their state-of-the-art research facilities and computational resources provide our members with exposure to enterprise-level AI development.",
      benefits: ["Research Projects", "Funding Support", "Lab Access"],
      website: "https://innovatelabs.example.com",
      founded: "2015",
      employees: "500+",
      locations: "8 countries",
    },
    {
      name: "DataFlow Systems",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Gold",
      description: "Big data analytics firm offering real-world project experience and career guidance.",
      fullDescription: "DataFlow Systems is a leading big data analytics company that transforms how organizations understand and leverage their data assets. As a Gold partner, they provide our members with hands-on experience in data engineering, analytics, and visualization through real-world projects with actual client datasets. Their expert team conducts regular workshops on modern data stack technologies, cloud data platforms, and advanced analytics techniques. DataFlow's partnership has enabled 25+ students to work on live client projects, with many transitioning directly into full-time roles as data engineers and analysts. Their comprehensive career guidance program includes resume reviews, interview preparation, and networking opportunities within the data science community.",
      benefits: ["Project Collaboration", "Career Guidance", "Data Access"],
      website: "https://dataflow.example.com",
      founded: "2012",
      employees: "2000+",
      locations: "15+ countries",
    },
    {
      name: "CyberSecure Inc",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Silver",
      description: "Cybersecurity specialist providing security training and certification programs.",
      fullDescription: "CyberSecure Inc is a premier cybersecurity firm specializing in enterprise security solutions, threat intelligence, and security consulting. Their Silver partnership with TechGenius focuses on developing the next generation of cybersecurity professionals through comprehensive training programs and industry-recognized certifications. They offer specialized workshops in penetration testing, incident response, and security architecture, led by certified ethical hackers and security consultants. CyberSecure has helped over 40 students achieve industry certifications including CEH, CISSP, and CompTIA Security+, with many securing positions in cybersecurity roles immediately upon graduation.",
      benefits: ["Security Training", "Certifications", "Workshop Support"],
      website: "https://cybersecure.example.com",
      founded: "2008",
      employees: "1500+",
      locations: "12+ countries",
    },
    {
      name: "MobileFirst Studios",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Silver",
      description: "Mobile app development company offering design workshops and development tools.",
      fullDescription: "MobileFirst Studios is a creative mobile application development company known for designing award-winning apps across iOS and Android platforms. Their Silver partnership brings together design thinking and technical excellence through hands-on workshops covering mobile UI/UX design, native development, cross-platform frameworks, and app store optimization. The studio's design team conducts monthly workshops on user experience research, prototyping, and design systems, while their engineering team shares insights on performance optimization and mobile architecture patterns. Over 60 students have benefited from their design workshops, with several student-built apps receiving recognition in app store featured sections.",
      benefits: ["Design Workshops", "Dev Tools", "App Store Credits"],
      website: "https://mobilefirst.example.com",
      founded: "2013",
      employees: "300+",
      locations: "5+ countries",
    },
    {
      name: "StartupHub Accelerator",
      logo: "/placeholder.svg?height=80&width=200",
      type: "Bronze",
      description: "Startup accelerator providing entrepreneurship support and networking opportunities.",
      fullDescription: "StartupHub Accelerator is a renowned early-stage startup accelerator that has launched over 200 successful companies since its inception. Their Bronze partnership with TechGenius focuses on nurturing entrepreneurial talent and providing pathways for student startups. They offer comprehensive entrepreneurship workshops covering business model development, fundraising strategies, pitch development, and go-to-market planning. StartupHub's extensive mentor network includes successful entrepreneurs, venture capitalists, and industry experts who provide guidance to student ventures. Through this partnership, 8 student startups have entered their accelerator program, with 3 successfully raising seed funding and 2 achieving significant market traction.",
      benefits: ["Startup Support", "Networking", "Pitch Opportunities"],
      website: "https://startuphub.example.com",
      founded: "2014",
      employees: "100+",
      locations: "10+ countries",
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
                <MorphingDialog
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 24,
                  }}
                >
                  {/* Partner Logo */}
                  <MorphingDialogTrigger className="block mb-4">
                    <div className="aspect-[2/1] bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
                      <MorphingDialogImage
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </MorphingDialogTrigger>

                  <MorphingDialogContainer>
                    <MorphingDialogContent className="relative h-auto w-[700px] max-w-[90vw] border border-border bg-background rounded-xl">
                      <ScrollArea className="h-[80vh]" type="scroll">
                        <div className="relative p-8">
                          <div className="flex justify-center py-6">
                            <MorphingDialogImage
                              src={partner.logo || "/placeholder.svg"}
                              alt={`${partner.name} logo`}
                              className="h-auto w-full max-w-[300px]"
                            />
                          </div>
                          <div className="space-y-6">
                            <div className="text-center">
                              <div className="flex items-center justify-center gap-4 mb-4">
                                <MorphingDialogTitle className="text-foreground text-2xl font-bold">
                                  {partner.name}
                                </MorphingDialogTitle>
                                <Badge className={getPartnerTypeColor(partner.type)}>{partner.type} Partner</Badge>
                              </div>
                              <MorphingDialogSubtitle className="text-muted-foreground text-lg">
                                {partner.description}
                              </MorphingDialogSubtitle>
                            </div>

                            <div className="grid grid-cols-3 gap-4 text-center py-4 bg-muted/20 rounded-lg">
                              <div>
                                <div className="text-sm font-semibold text-foreground">Founded</div>
                                <div className="text-sm text-muted-foreground">{partner.founded}</div>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-foreground">Employees</div>
                                <div className="text-sm text-muted-foreground">{partner.employees}</div>
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-foreground">Global Presence</div>
                                <div className="text-sm text-muted-foreground">{partner.locations}</div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h4 className="text-lg font-semibold text-foreground">Partnership Details</h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {partner.fullDescription}
                              </p>
                            </div>

                            {/* Benefits */}
                            <div className="space-y-3">
                              <h4 className="text-lg font-semibold text-foreground">Partnership Benefits</h4>
                              <div className="flex flex-wrap gap-2">
                                {partner.benefits.map((benefit, idx) => (
                                  <Badge key={idx} variant="outline" className="text-sm">
                                    {benefit}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex justify-center pt-4">
                              <Button variant="outline" size="lg">
                                Visit {partner.name}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>
                      <MorphingDialogClose className="text-muted-foreground" />
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>

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
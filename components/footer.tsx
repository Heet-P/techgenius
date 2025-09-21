"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#committee", label: "Committee" },
    { href: "#events", label: "Events" },
    { href: "#achievements", label: "Achievements" },
    { href: "#partners", label: "Partners" },
  ]

  const resources = [
    { href: "#", label: "Member Portal" },
    { href: "#", label: "Project Gallery" },
    { href: "#", label: "Learning Resources" },
    { href: "#", label: "Career Center" },
    { href: "#", label: "Alumni Network" },
  ]

  const contact = [
    { icon: Mail, text: "hello@techgenius.edu" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: MapPin, text: "Tech Building, Room 201\nUniversity Campus" },
  ]

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">TechGenius</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering the next generation of technology leaders through innovation, collaboration, and excellence.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.href}>
                  <a
                    href={resource.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Stay Connected</h4>
            <div className="space-y-3">
              {contact.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <item.icon className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="text-sm" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-muted-foreground">© 2024 TechGenius. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Users, Lightbulb } from "lucide-react"
import { useEffect, useState } from "react"
import { PrimaryGlowButton, SecondaryGlowButton } from '@/components/ui/glow-button'


export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent rounded-full animate-pulse delay-1500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Where Innovation
            <span className="block text-primary">Meets Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Join TechGenius, the premier technology club fostering innovation, learning, and collaboration among
            students passionate about shaping the future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <PrimaryGlowButton size="lg">
                Join Our Community
              </PrimaryGlowButton>
              <SecondaryGlowButton size="lg">
                  Explore Events
              </SecondaryGlowButton>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-200 ${mounted ? "animate-slide-in-left" : "opacity-100"}`}
            >
              <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Learn & Build</h3>
                <p className="text-muted-foreground text-center text-sm">
                  Master cutting-edge technologies through hands-on workshops and collaborative projects.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Connect & Network</h3>
                <p className="text-muted-foreground text-center text-sm">
                  Build lasting connections with like-minded peers and industry professionals.
                </p>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-600 ${mounted ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Innovate & Create</h3>
                <p className="text-muted-foreground text-center text-sm">
                  Transform ideas into reality through hackathons, competitions, and startup initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

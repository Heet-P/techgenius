"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Users, Calendar, Award } from "lucide-react"
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock'
import { GlowEffect } from '@/components/ui/glow-effect'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About", icon: Home },
    { href: "#committee", label: "Committee", icon: Users },
    { href: "#events", label: "Events", icon: Calendar },
    { href: "#achievements", label: "Achievements", icon: Award },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl" : "bg-transparent"
      }`}
      style={{
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.1)'
          : 'transparent',
        borderBottom: scrolled 
          ? '1px solid rgba(255, 255, 255, 0.2)' 
          : 'none',
        boxShadow: scrolled
          ? '0 4px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          : 'none'
      }}
    >
      {scrolled && (
        <div className="absolute inset-0 -z-10">
          <GlowEffect
            colors={['#3B82F6', '#1D4ED8', '#60A5FA']}
            mode='pulse'
            blur='soft'
            duration={4}
            scale={2}
            className="opacity-10"
          />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              TechGenius
            </a>
          </div>

          {/* Desktop Navigation with Dock */}
          <div className="hidden md:block">
            <Dock className="bg-black/30 backdrop-blur-xl border-white/20">
              {navItems.map((item) => (
                <DockItem key={item.href} className="group">
                  <DockLabel>{item.label}</DockLabel>
                  <DockIcon>
                    <a
                      href={item.href}
                      className="flex items-center justify-center w-full h-full text-white/70 hover:text-blue-400 transition-colors duration-200"
                    >
                      <item.icon className="w-5 h-5" />
                    </a>
                  </DockIcon>
                </DockItem>
              ))}
            </Dock>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block relative">
            <GlowEffect
              colors={['#10B981', '#059669', '#34D399']}
              mode='colorShift'
              blur='medium'
              duration={3}
              scale={0.9}
            />
            <Button 
              variant="outline" 
              size="sm"
              className="relative bg-background/80 border-border/50 text-foreground hover:text-blue-600 hover:bg-blue-100/50 hover:border-blue-300 backdrop-blur-sm"
              style={{
                boxShadow: '0 4px 15px rgba(255, 5, 5, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              Join Community
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative">
            <GlowEffect
              colors={['#3B82F6', '#3B82F6']}
              mode='pulse'
              blur='medium'
              duration={2}
              scale={0.8}
              className="opacity-60"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-foreground hover:bg-background/20"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-xl border-b border-border/20">
          <div className="px-4 py-6 space-y-4">
            <div className="relative">
              <GlowEffect
                colors={['#3B82F6', '#8B5CF6', '#10B981']}
                mode='static'
                blur='medium'
                scale={1.2}
                className="opacity-10"
              />
            </div>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-foreground/80 hover:text-foreground hover:bg-background/20 transition-colors duration-200 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <div className="relative">
                <GlowEffect
                  colors={['#10B981', '#059669']}
                  mode='colorShift'
                  blur='medium'
                  duration={3}
                  scale={0.9}
                />
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="relative w-full bg-background/80 border-border/50 text-foreground hover:bg-background/90"
                  style={{
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Users, Calendar, Award, Building2 } from "lucide-react"
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
    { href: "#partners", label: "Partners", icon: Building2 },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl" : "bg-transparent"
      }`}
      style={{
        background: scrolled 
          ? 'rgba(5, 10, 28, 0.8)'
          : 'transparent',
        borderBottom: scrolled 
          ? '1px solid rgba(255, 255, 255, 0.1)' 
          : 'none',
        boxShadow: scrolled
          ? '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
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
            className="opacity-20"
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
                      className="flex items-center justify-center w-full h-full text-white/70 hover:text-white transition-colors duration-200"
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
              className="relative bg-gray-950/80 border-white/20 text-white hover:bg-gray-950/90 hover:border-white/30 backdrop-blur-sm"
              style={{
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              Join Community
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative">
            <GlowEffect
              colors={['#8B5CF6', '#7C3AED']}
              mode='pulse'
              blur='soft'
              duration={2}
              scale={0.8}
              className="opacity-50"
            />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div 
            className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-xl border-t border-white/10"
            style={{
              background: 'rgba(5, 10, 28, 0.95)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="absolute inset-0 -z-10">
              <GlowEffect
                colors={['#3B82F6', '#8B5CF6', '#10B981']}
                mode='static'
                blur='medium'
                scale={1.2}
                className="opacity-20"
              />
            </div>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 rounded-md"
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
                  className="relative w-full bg-gray-950/80 border-white/20 text-white hover:bg-gray-950/90"
                  style={{
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
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
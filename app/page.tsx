import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CommitteeSection } from "@/components/committee-section"
import { EventsSection } from "@/components/events-section"
import { AchievementsSection } from "@/components/achievements-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CommitteeSection />
      <EventsSection />
      <AchievementsSection />
      <PartnersSection />
      <Footer />
    </main>
  )
}

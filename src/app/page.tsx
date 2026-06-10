import { TopNav } from "@/components/layout/TopNav"
import { HeroSection } from "@/components/home/HeroSection"
import { FeatureCards } from "@/components/home/FeatureCards"
import { DeveloperFooter } from "@/components/home/DeveloperFooter"

export default function HomePage() {
  return (
    <main>
      <TopNav />
      <HeroSection />
      <FeatureCards />
      <DeveloperFooter />
    </main>
  )
}

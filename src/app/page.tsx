import HeroSection from '@/components/sections/HeroSection'
import FeaturesHighlightSection from '@/components/sections/FeaturesHighlightSection'
import StellarChallengeSection from '@/components/sections/StellarChallengeSection'
import StatsSlider from '@/components/sections/StatsSlider'
import React, { ReactElement } from 'react'

export default function page(): ReactElement {
  return (
    <>
      <HeroSection />
      <StatsSlider />
      <FeaturesHighlightSection />
      <StellarChallengeSection />
    </>
  )
}

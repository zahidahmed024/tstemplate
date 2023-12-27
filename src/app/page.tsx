import HeroSection from '@/components/HeroSection'
import InfoSection1 from '@/components/InfoSection1'
import InfoSection2 from '@/components/InfoSection2'
import TextSlider from '@/components/TextSlider'
import React, { ReactElement } from 'react'

export default function page(): ReactElement {
  return (
    <>
      <HeroSection />
      <TextSlider />
      <InfoSection1 />
      <InfoSection2 />
    </>
  )
}

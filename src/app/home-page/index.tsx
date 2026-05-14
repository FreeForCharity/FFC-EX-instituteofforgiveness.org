import React from 'react'
import Hero from '@/components/home-page/iof/Hero'
import Mission from '@/components/home-page/iof/Mission'
import Programs from '@/components/home-page/iof/Programs'
import ImpactTiers from '@/components/home-page/iof/ImpactTiers'
import DonateCTA from '@/components/home-page/iof/DonateCTA'
import Contact from '@/components/home-page/iof/Contact'

const Index = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Programs />
      <ImpactTiers />
      <DonateCTA />
      <Contact />
    </div>
  )
}

export default Index

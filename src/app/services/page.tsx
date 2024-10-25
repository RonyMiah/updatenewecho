'use client'
import React from 'react'
import ServiceBanner from '../components/Services/ServiceBanner'
import ServiceCard from '../components/Services/ServiceCard'
import ServiceSlideText from '../components/Services/ServiceSliderText'

const page = () => {
  return (
    <>
      <ServiceBanner/>
      <ServiceCard/>
      <ServiceSlideText/>
    </>
  )
}

export default page

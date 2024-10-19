import React from 'react'

import HeroSection from '../HeroSection/HeroSection'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import NextWhatWeDo from '../WhatWeDo/NextWhatWeDo'
import HighQualityService from '../QualityService/HighQualityService'
import WhatMakesUsDifferent from '../WhatMakeUsDefarent/WhatMakeUsDefarent'
import OurClient from '../OurClient/OurClient'
import ContactSection from './ContactInfo/ContactSection'

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <WhatWeDo/>
      <NextWhatWeDo/>
      <HighQualityService/>
      <WhatMakesUsDifferent/>
      <OurClient/>
      <ContactSection/>
    </>
  )
}

export default HomePage

import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import CountNum from './component/CountNum'
import SectionHeading from './component/Section1Heading'
import Section2 from './component/Section2'
import Section1 from './component/Section1'
import Section3 from './component/Section3'
import Section4 from './component/Section4'
import CustomizedTables from './component/Section5Table'
import Sectoin6Card from './component/Section6'
import Section7 from './component/Section7'
import Section8 from './component/Section8'
import Section8Table from './component/Section9Table'
import Section10Card from './component/Section10'
import Footar from './component/Footar'

const App = () => {
  return (
    <div>
      <div className='bg-black '>
      <Header/>
      <Hero/>
      </div>
      <div>
      <CountNum/>
      <SectionHeading/>
      <Section1/>
      <Section2/>
      <Section3 />
      <Section4/>
      <CustomizedTables/>
      <Sectoin6Card/>
      <Section7/>
      <Section8/>
      <Section8Table/>
      <Section10Card/>
      <Footar/>


      </div>
        
      



      



    </div>
  )
}

export default App

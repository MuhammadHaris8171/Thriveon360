import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Expertise from '../components/Expertise'
import Meet from '../components/Meet'
import Core from '../components/Core'

function Home() {
  return (
    <div>

        <Hero />
        <Expertise />
        <Meet />
        <Core />
    </div>
  )
}

export default Home
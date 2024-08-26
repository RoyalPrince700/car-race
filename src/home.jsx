import { SignInButton, SignUpButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'
import Hero from './components/Hero'



function Home() {
  return (
    <div>
        

       
      {/* Header*/}
        <Header/>
       {/* Hero */}
       <Hero/>
    </div>
  )
}

export default Home
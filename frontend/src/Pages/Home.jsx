import React from 'react'
import Hero from '../Components/Hero/Hero'
import Courses from '../Components/Courses/Courses'
import Categories from '../Components/Categories/Categories'
import Teacher from '../Components/Teacher/Teacher'
import PricingPlans from '../Components/PricingPlans/PricingPlans'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Teacher/>
        <Courses/>
        <PricingPlans/>
        <Categories/>
      
    </div>
  )
}

export default Home

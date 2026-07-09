import React from 'react'
import Services from './Services';
import WhyUs from './WhyUs';
import ProblemSolution from './ProblemSolution';
import Banner from './Banner';
import Resources from './Resources';
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <div>
      <Banner/>
          <Services />
          <Resources />
    </div>
  )
}

export default Home

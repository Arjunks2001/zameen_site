import React from 'react'
import Home from './Home'
import Popular from './Popular'
import Projects from './Projects'
import Plots from './Plots'
import Residential from './Residential'
import Office from './Office'
import Commercial from './Commercial'
import Agents from './Agents'
import Subscribe from './Subscribe'
 

const Front_page = () => {
  return (
    <div>
     <Home/>
    <Popular/>
    <Projects/>
    <Plots/>
   <Residential/>
    <Office/>
    <Commercial/>
    <Agents/>
      <Subscribe/>
    </div>
  )
}

export default Front_page
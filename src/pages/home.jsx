import React from 'react'
import Landing from '../components/Landing'
import Highlights from '../components/Highlights'
import Featured from '../components/Featured'
import Discounted from '../components/ui/Discounted'
import Explore from '../components/Explore'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
   <>
   <Landing></Landing>
<Highlights></Highlights>
<Featured></Featured>
{/* <Discounted></Discounted> */}
<Explore></Explore>
</>
  )
}

export default Home
import React from 'react'  
import '../App.css'; 
import Crossfade from '../components/Crossfade';
import DidYouKnow from '../components/DidYouKnow'; 
import FreedomArc from '../components/FreedomArc';
import HomeGallery from '../components/HomeGallery';
import Jewell from '../components/Jewell'; 
import Partners from '../components/Partners';
import Storypage from '../components/Storypage';
import TodayinHistory from '../components/TodayinHistory';
import VirtualWalk from '../components/VirtualWalk';
import ExternalLinks from '../components/ExternalLinks';
import Rarebook from '../components/Rarebook';
import Moc from '../components/Moc';
import ChildrenSec from '../components/ChildrenSec';
// import Catagories from './components/Catagories';
import CategoriesOpt from '../components/CategoriesOpt';
// import UnderConst from '../components/UnderConst';


const Home = () => {
  return (
   
   
   <main >     
       
      <Crossfade />
      <CategoriesOpt /> 
      <FreedomArc />
      <DidYouKnow />
      <TodayinHistory />
      <Storypage />
      <VirtualWalk />
      <Jewell />
      <HomeGallery /> 
      <ChildrenSec />
      <Rarebook />
      <ExternalLinks />
      <Moc />
      <Partners />
      
      
    </main>
  )
}

export default Home
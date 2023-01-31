import React from 'react';
import Popular from "../components/Popular";
import Trending from '../components/Trending';
import { motion } from 'framer-motion';


function Home() {
  return (
    <motion.div 
    animate={{ opacity : 1 }}
    initial={{opacity:0}}
  transition={{ ease: "easeOut", duration: 1.5 }} >
        <Popular/>
        
      <Trending/>
    </motion.div>
  )
}

export default Home;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Showroom() {

  const [showroom, setShowroom]=useState([]);
  let params = useParams();

  const getPics = async (name) => {
    const data = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&category=${name}&image_type=photo&per_page=30`);
    const pics = await data.json();
    setShowroom(pics.hits);
  }

  useEffect(()=>{
    getPics(params.type); 
  }, [params.type]);

  return (
    <Grid 
    animate={{ opacity : 1 }}
    initial={{opacity:0}}
  transition={{ ease: "easeOut", duration: 1.5 }}>
      {showroom.map((c)=>{
        return (
          <Card key={c.id}>
             <Link to={'/pic/'+c.id}>
            <img src={c.webformatURL} alt="pic" />
            <h4>{c.tags}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem
`;

const Card = styled.div`
img {
  width: 100%;
  height: 60%;
  border-radius: 1.3rem;
}
a {
  text-decoration: none;
}
h4 {
  text-align: center;
  padding: 1rem;
}
`;

export default Showroom;
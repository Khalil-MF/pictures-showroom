import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';
function Searched() {

    const [searchedPics,setSearchedPics]=useState([]);
    let params = useParams();

    const getSearched = async (query) => {
        const data = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${query}&image_type=photo&per_page=50`);
        const pics = await data.json();
        setSearchedPics(pics.hits)
      }

    useEffect(()=>{
        getSearched(params.search);
    }, [params.search]);
    

  return (
    <Grid  animate={{ opacity : 1 }}
    initial={{opacity:0}}
  transition={{ ease: "easeOut", duration: 1.5 }}>
            {searchedPics.map((searched)=> {
                return (
                    <Card key={searched.id}>
                       <Link to={'/pic/'+searched.id}>
                    <img src={searched.webformatURL} alt="pics" />
                    <h4>{searched.tags}</h4>
                    </Link>
                    </Card>
                );
            })}
    </Grid>
  );
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


export default Searched;
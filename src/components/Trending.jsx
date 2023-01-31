import  React,{ useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Splide,SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';


function Trending() {

    const [trend,setTrend]=useState([]);

    useEffect(()=> {
        getTrend();
        
    },[])

    const getTrend = async () => {

        const check = localStorage.getItem('trend');
        if (check) {
            setTrend(JSON.parse(check));
        }else{
        const api = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&image_type=photo&per_page=25`)
        const data = await api.json();
        localStorage.setItem('trend',JSON.stringify(data.hits));
        setTrend(data.hits);
        }

        
    }


  return (
    <div>
        <h3> Trending Pictures</h3>
        <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        <Wrapper>
            <Splide options={{
                perPage : 4,
                arrows: true,
                pagination :false,
                drag: 'free',
                gap: '3rem'
            }}>
                
                    {trend.map((pic)=>{
                        return(
                        <SplideSlide key={pic.id}>
                            <Card>
                                <Link to={'/pic/'+pic.id}>
                                    <p>
                                        {pic.tags}
                                    </p>
                                    <img src={pic.webformatURL} alt={pic.tags}/>
                                    <Gradient/>
                                </Link>
                            </Card>
                        </SplideSlide>
                        )
                    })}
            </Splide>
        </Wrapper>
        </div>
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0% );
        color: #F5EDCE;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7))`;

export default Trending;
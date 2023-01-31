import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import UseAnimations from 'react-useanimations';
import heart from 'react-useanimations/lib/heart';
import { motion } from 'framer-motion';

function Picture() {
  const [details,setDetails]=useState({});
  const [activeTab,setActiveTab]=useState('informations');
  let params = useParams();

  const fetchDetail = async () => {
    const data = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&id=${params.detail}`);
    const detailData = await data.json();
    setDetails(detailData.hits[0]);
    console.log(detailData,details);
  }

  useEffect(()=>{
    fetchDetail();
  },[params.detail]);

  return (
    <DetailWrapper  animate={{ opacity : 1 }}
      initial={{opacity:0}}
      transition={{ ease: "easeOut", duration:2 }} key={details.id}>
        
      <div>
        <h2>{details.tags}</h2>
        <Image src={details.webformatURL} alt="" />
      </div>
      <Info>
        <Button className={activeTab === 'informations' ? 'active' :''} onClick={()=> setActiveTab('informations')}>Informations</Button>
        <Button className={activeTab === 'download' ? 'active' :''} onClick={()=> setActiveTab('download')}>Download</Button> 
        {activeTab === 'informations' && (
        <div>
          <h5>Picture by {details.user}<span className='indicator'><img src={details.userImageURL} alt="user"/></span></h5>
          
          <h5> width x height : {details.imageWidth} x {details.imageHeight}</h5>
          <h5>Type : {details.type}</h5>
          <h5>{details.likes} like {<UseAnimations animation={heart} size={35} />}</h5>
        </div>
        )}
        {activeTab ==='download' && (<ul>
             <li key={details.id}>
             <h5>Number of downloads : {details.downloads}</h5>
               <Dlink href={details.pageURL} target='_blank' >Download link</Dlink>
            </li>
        </ul>)}
      </Info>
    </DetailWrapper>
  )
}

const Dlink = styled.a`
  text-decoration: none;
  font-weight: 600;
`;

const DetailWrapper = styled(motion.dev)`
  margin-top: 6rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg ,#f07af0, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    color: rgb(90, 90, 90);
  }
  ul {
   margin-top: 2rem;
  }
`;

const Button = styled.button`
  min-width: 120px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  background: #fff;
  overflow: hidden;
  border:none;
  color: #212529;


`;

const Info = styled.div`
  margin-left: 3rem;
`;

const Image = styled.img`
  max-width: 550;
  max-height: 350;
  border: none;
  border-radius: 5%;

`;


export default Picture;
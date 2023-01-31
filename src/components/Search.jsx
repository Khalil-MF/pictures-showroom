import React,{useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


function Search() {

    const [input,setInput]=useState('');
    const navigate = useNavigate();

    const submitHandle = (e) => {
        e.preventDefault();
        navigate('/searched/'+input)
    }
  return (
    <Sform onSubmit={submitHandle}>
        <div>
            <FaSearch/> 
            <input onChange={(e)=> setInput(e.target.value)} type="text" value={input} />
        </div>
    </Sform>

  )
}

const Sform = styled.form`
    margin: 0rem 2rem;
    
    div{
        position: relative;
        width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(35deg ,#58287F, #89C4E1);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100% ;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #F5EDCE;  
    }


`;


export default Search
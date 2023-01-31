import {MdComputer, MdNature,MdFoodBank} from 'react-icons/md';
import {HiBuildingOffice2} from 'react-icons/hi2';
import {SiStylelint} from 'react-icons/si'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() { 
  return (
    <List>
        <SLink to={'/category/nature'}>
            <MdNature/>
            <h4>Nature</h4>
        </SLink>
        <SLink to={'/category/fashion'}>
            <SiStylelint/>
            <h4>Fashion</h4>
        </SLink >
        <SLink to={'/category/buildings'}>
            <HiBuildingOffice2/>
            <h4>Building</h4>
        </SLink>
        <SLink to={'/category/computer'}>
            <MdComputer/>
            <h4>Computer</h4>
        </SLink>

        <SLink to={'/category/food'}>
            <MdFoodBank/>
            <h4>Food</h4>
        </SLink>

    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    gap : 10px
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #58287F, #89C4E1);
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    transform: scale(0.8rem);
h4 {
    color: #ffffff;
    font-size: 0.8rem;
}
svg {
    color : #F5EDCE;
    font-size : 1.5rem;
}

&.active {
    background: linear-gradient(to right , #f07af0, #a500b4);
    svg{
        color: #ffffff;
    }
    h4{
        color: #ffffff;
    }
}

`;


export default Category;
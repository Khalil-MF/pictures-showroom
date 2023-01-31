import React from 'react';
import { BrowserRouter,Link } from 'react-router-dom';
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1.859 6l-.489-2h21.256l-.491 2h-20.276zm1.581-4l-.439-2h17.994l-.439 2h-17.116zm20.56 16h-24l2 6h20l2-6zm-20.896-2l-.814-6h19.411l-.839 6h2.02l1.118-8h-24l1.085 8h2.019zm2.784-3.995c-.049-.555.419-1.005 1.043-1.005.625 0 1.155.449 1.185 1.004.03.555-.438 1.005-1.044 1.005-.605 0-1.136-.449-1.184-1.004zm7.575-.224l-1.824 2.68-1.813-1.312-2.826 2.851h10l-3.537-4.219z"/></svg>
          <Logo to={'/'}>Home Page</Logo>
        </Nav>
        <Search/>
        <Category/>
        <Pages />
      </BrowserRouter>
    </div>
  );
}


const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: #540375 ;
  font-weight: 400;
  font-family: 'Oswald', sans-serif;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2.5rem;
    color: #540375;
  }
`;


export default App;

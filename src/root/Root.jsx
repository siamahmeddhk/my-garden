import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../comp/Nav';
import Footer from '../comp/Footer';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
           
  <Outlet></Outlet>
        
            <Footer></Footer>
        </div>
    );
};

export default Root;
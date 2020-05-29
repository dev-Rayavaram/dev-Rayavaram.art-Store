import React from 'react';
import { Link } from 'react-router-dom';

function Menubar() {
 // const [hoverIndex,setHoverIndex]=useState(-1);
 // const [navOpen,setNavOpen]=useState(false);
    return (
          <>
           <nav className = "responsive-menu">
             <ul>
                <li tag={Link} to="/">Home</li>
                <li tag={Link} to='/order'>Manage Order</li>
                <li tag={Link} to="/product">Products</li>
                <li tag={Link} to="/contact">About</li>
             </ul>
           </nav>;
          </>

    );
};
    
export default Menubar;
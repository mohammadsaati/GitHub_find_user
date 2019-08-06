import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = ({icon , title}) => {
        return (
            <nav className="navbar bg-light">
                <h5>
                    <i className={icon} />&nbsp;
                    {title}
                </h5>
               <Link to="/about" >About</Link>
               <Link to="/" >Home</Link>
            </nav>
        )
}

Navbar.defaultProps = {
    title : 'GitHub finder',
    icon : 'fab fa-github'
};


export default Navbar

import React from 'react';
import './css/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            
            <div className = "navbar">
               <a href='/' className="Title"> <h1>Ranjzit Photography</h1></a>
                          
            <ul>
               <li><a href='/'>Home</a></li>
               <li><a href='/gallery'>Gallery</a></li>
              <li> <a href=''>Blog</a></li>
               <li><a href='/contact'>Contact</a></li>
            </ul>
            
               </div>

        );
    }
}
export default Navbar;
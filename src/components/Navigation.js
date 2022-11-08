import React from 'react';  
import { Link } from 'react-router-dom';
import {FaFileArchive} from 'react-icons/fa'
 
const Navigation = () => {

  return (
    <nav className="navigation">
      <ul>
        <li>
        <Link to="/archive"><FaFileArchive/> 
        </Link>
        </li>
      </ul>
    </nav>
  );
}

 
 
export default Navigation;
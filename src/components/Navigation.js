import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle } from 'react-icons/fi';
import { BiArchiveIn} from	'react-icons/bi';
 
function Navigation() {
  return (
    <nav className="navigation">
      <ul>
      <li><Link to="/"><FiHome /></Link></li>
        <li><Link to="/add"><FiPlusCircle /></Link></li>
        <li><Link to="/archive"><BiArchiveIn/></Link></li>
      </ul>
    </nav>
  );
}
 
export default Navigation;
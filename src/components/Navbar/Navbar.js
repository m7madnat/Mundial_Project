import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='navbar'>            
          <h1 className='headName'>
          <img src="https://i.imgur.com/Ra8Jwao.png" alt='icon' /></h1>
          <div className='navbarLink'>    
            <Link className='linkBorder' to='/'>
                Home
            </Link>
            <Link className='linkBorder' to='/stadiums'>
                Stadiums
            </Link>
            <Link className='linkBorder' to='/teams'>
                Teams
            </Link>  
            <Link className='linkBorder' to='/contact'>
                Contact
            </Link>          
            </div>
        </div>
      );
};

export default Navbar;
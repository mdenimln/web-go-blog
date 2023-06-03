import {  useState } from 'react';
import { FaBell, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavMobile.css';
const NavMobile = () => {
    const { show , setShow} = useState(false);
    return(
        <main className='nav-mobile'>
            <h1 className='judul'>Go Blog</h1>
            <div>
            <input 
             type="checkbox"
             id="checkbox"
              />
                <label onClick={setShow(!show)} for="checkbox" className="toggle">
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                    <div className="bars" id="bar1"></div>
                </label>
            </div>
            {show && (
                <nav className='nav-menu'>
            
                    <div  className='item-notif-mobile'><FaBell /></div>
                    <ul>
                        <Link className='link-item' to='/'>Home</Link>
                        
                        
                        <Link className='link-item' to='/profile'>Profile</Link>
                        
                        
                        <Link className='link-item' to='/blog'>Blog</Link>
                        
                    </ul>
            
                </nav>
            )}
        </main>
    );
}
export default NavMobile;
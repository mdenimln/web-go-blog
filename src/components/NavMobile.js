// import {  useState } from 'react';
import { useState } from 'react';
import { FaBell, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavMobile.css';
const NavMobile = () => {
    const [checkboxval, setCheckboxVal] = useState(false);

    const handleChangeCheckbox = (e) => {
    setCheckboxVal(!checkboxval);
    }
    console.log(checkboxval)

    return(
        <main className='nav-mobile'>
            <h1 className='judul'>Go Blog</h1>
            <div>
            <input 
             type="checkbox"
             id="checkbox"
              />
                <label onChange={checkboxval} onClick={(e) => handleChangeCheckbox(e)} htmlFor='checkbox' className="toggle">
                    <div className="bars" id="bar2"></div>
                    <div className="bars" id="bar3"></div>
                    <div className="bars" id="bar1"></div>
                </label>
            </div>
            {checkboxval && (
                <nav className='nav-menu'>
                
                <div  className='item-notif-mobile'><FaBell /></div>
                <ul>
                    <Link onClick={()=> {setCheckboxVal(false)
                    }} to='/'>Home</Link>
                    
                    
                    <Link to='/profile'>Profile</Link>
                    
                    
                    <Link to='/blog'>Blog</Link>
                    
                </ul>
        
            </nav>
            )}
            
                
        </main>
    );
}
export default NavMobile;
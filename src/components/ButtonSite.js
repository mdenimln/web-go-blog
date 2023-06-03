import { Link } from 'react-router-dom';
import './ButtonSite.css'
const ButtonSite = () => {
    return(
        <>
            <Link className='button-site' to='/contact'>
                <div className="li">
                    Notify Me
                    <span></span><span></span><span></span><span></span>
                </div>
            </Link>
        </>
        
    )
}
 export default ButtonSite;
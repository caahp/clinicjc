import logo from '../../img/jclogo.png';
import '../Logo/Logo.module.css';

function Logo() {
    return ( 
    <div className = 'logo'>
        <img src={logo} 
        alt = 'logo'
        className = 'logo-img'></img>
    </div>
    );
}

export default Logo;
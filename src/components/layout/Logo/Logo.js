import logo from '../../img/jclogo.svg';
import '../Logo/Logo.css';

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
import './Navbar.module.css'
import Logo from '../Logo/Logo';
import Header from '../Header/Header';

function Navbar () {
    return (
        <header className = 'App-header'>
            <Logo/>
            <Header/>
        </header>
    )
}

export default Navbar


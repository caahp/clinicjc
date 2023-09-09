import Logo from '../Logo/Logo';
import Header from '../Header/Header';
import styled from 'styled-components'

const NavbarContainer = styled.header`
        background-color: #8e5f26;
        display: flex;
        justify-content: center;
`

function Navbar () {
    return (
        <NavbarContainer>
            <Logo/>
            <Header/>
        </NavbarContainer>
    )
}

export default Navbar


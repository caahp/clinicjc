import logo from '../../img/jclogo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    width: 120px;
    height: 120px; 
    color: #ffffff;
`
const LogoImage = styled.img`
    margin-right: 10px;
    margin-left: 20px;
    margin-top: 0px;
`


function Logo() {
    return ( 
    <LogoContainer>
        <LogoImage 
        src={logo} 
        alt = 'logo'/>
    </LogoContainer>
    );
}

export default Logo;
import logo from '../../img/jclogo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    width: 120px;
    height: 120px;
    color: #ffffff;

    @media (max-width: 768px) {
        width: 80px; /* Reduza a largura em telas menores */
        height: 80px; /* Reduza a altura em telas menores */
        position: absolute; /* Posição absoluta em telas menores */
        top: 10px; /* Distância do topo */
        left: 20px; /* Distância da esquerda */
    }
`

const LogoImage = styled.img`
    margin-right: 10px;
    margin-left: 20px;
    margin-top: 0px;
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
        margin-left: 10px; /* Ajuste a margem em telas menores */
    }
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' />
        </LogoContainer>
    );
}

export default Logo;

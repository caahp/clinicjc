import styled from 'styled-components';

const Opcao = styled.li`
    color: #ffffff;
    font-size: 19px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 10px;
    padding-left: 40px;
    cursor: pointer;
    min-width: 120px;

    @media (max-width: 768px) {
        font-size: 10px; /* Reduza o tamanho da fonte em telas menores */
        min-width: auto; /* Remova a largura mínima em telas menores */
        flex-grow: 1; /* Faça com que as opções cresçam para ocupar o espaço disponível */
        flex-basis: 0; /* Redefina a base flex para permitir o crescimento igual */
        margin-top: -15px; /* Ajuste a margem superior negativa para mover o texto para cima em telas menores */
        margin-right: -12px; /* Ajuste o espaçamento entre as opções em telas menores */
    }
`;

const Opcoes = styled.ul`
    display: flex;
    margin-top: 35px;
    margin-bottom: 0px;
    margin-left: 600px;
    height: 65px;

    @media (max-width: 768px) {
        margin-left: 100px; /* Remova a margem esquerda em telas menores */
    }
`;

const textoOpcoes = ['HOME', 'PROCEDIMENTOS', 'CONTATO']; /* Ajuste o texto para incluir a palavra "PROCEDIMENTO" */

function Header() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto, index) => (
                <Opcao key={index}><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    );
}

export default Header;

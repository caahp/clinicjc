import styled from 'styled-components'

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
    cursor: pointer;
    min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
    margin-bottom: 0px;
    margin-left: 600px;
`

const textoOpcoes = ['HOME', 'PROCEDIMENTOS ⇩', 'CONTATO']

function Header() {
    return(
    <Opcoes>
            { textoOpcoes.map((texto) => (
              <Opcao><p>{texto}</p></Opcao>
            ) )}
        </Opcoes> )
}

export default Header;
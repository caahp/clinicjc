import './Header.css';

const textoOpcoes = ['HOME', 'PROCEDIMENTOS ⇩', 'CONTATO']

function Header() {
    return(
    <ul className = 'opcoes'>
            { textoOpcoes.map((texto) => (
              <li className = 'opcao'><p>{texto}</p></li>
            ) )}
        </ul> )
}

export default Header;